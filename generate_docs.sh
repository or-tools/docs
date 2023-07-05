#!/usr/bin/env bash
set -eo pipefail

function assert_defined(){
  if [[ -z "${!1}" ]]; then
    >&2 echo "Variable '${1}' must be defined"
    exit 1
  fi
}

function gen_cpp() {
  local -r IMAGE="or-tools/docs:cpp"

  docker build \
 --tag ${IMAGE} \
 --target=cpp \
 -f ${ROOT_DIR}/src/Dockerfile \
 ${ROOT_DIR}/src

  rm -rf "${OUTPUT_DIR}"/cpp
  docker run --rm --init \
 -v ${OUTPUT_DIR}/:/export \
 -it \
 --user ${ID_U}:${ID_G} \
 --name cpp_doc \
 ${IMAGE} \
 "cp -r build/docs/cpp /export/"
}

function gen_dotnet() {
  local -r IMAGE="or-tools/docs:dotnet"

  docker build \
 --tag ${IMAGE} \
 --target=dotnet \
 -f ${ROOT_DIR}/src/Dockerfile \
 ${ROOT_DIR}/src

  rm -rf "${OUTPUT_DIR}"/dotnet
  docker run --rm --init \
 -v ${OUTPUT_DIR}/:/export \
 -it \
 --user ${ID_U}:${ID_G} \
 --name dotnet_doc \
 ${IMAGE} \
 "cp -r build/docs/dotnet /export/"
}

function gen_java() {
  local -r IMAGE="or-tools/docs:java"

  docker build \
 --tag ${IMAGE} \
 --target=java \
 -f ${ROOT_DIR}/src/Dockerfile \
 ${ROOT_DIR}/src

  rm -rf "${OUTPUT_DIR}"/java
  docker run --rm --init \
 -v ${OUTPUT_DIR}/:/export \
 -it \
 --user ${ID_U}:${ID_G} \
 --name java_doc \
 ${IMAGE} \
 "cp -r build/docs/java /export/"

  rm -rf "${OUTPUT_DIR}"/javadoc
  docker run --rm --init \
 -v ${OUTPUT_DIR}/:/export \
 -it \
 --user ${ID_U}:${ID_G} \
 --name javadoc_doc \
 ${IMAGE} \
 "cp -r build/docs/javadoc /export/"
}

function gen_python() {
  local -r IMAGE="or-tools/docs:dotnet"

  docker build \
 --tag ${IMAGE} \
 --target=python \
 -f ${ROOT_DIR}/src/Dockerfile \
 ${ROOT_DIR}/src

  rm -rf "${OUTPUT_DIR}"/pdoc
  docker run --rm --init \
 -v ${OUTPUT_DIR}/:/export \
 -it \
 --user ${ID_U}:${ID_G} \
 --name pdoc_doc \
 ${IMAGE} \
 "cp -r build/docs/pdoc /export/"
}

function gen_all() {
  gen_cpp
  gen_dotnet
  gen_java
  gen_python
}

function usage() {
  local -r NAME=$(basename "$0")
  echo -e "$NAME - Build docs using an Alpine Docker.

SYNOPSIS
\t$NAME [-h|--help] [cpp|dotnet|java|python|all]

DESCRIPTION
\tBuild Google OR-Tools reference documentation using an alpine distro.

OPTIONS
\t-h --help: show this help text
\tcpp: Build the C++ doc only
\tdotnet: Build the .Net doc only
\tjava: Build the Java doc only
\tpython: Build the Python doc only
\tall: Build all docs (default)

EXAMPLES
$0 all"
}

# Main
function main() {
  case ${1} in
    -h | --help)
      usage; exit ;;
  esac

  # shellcheck disable=SC2155
  declare -r ROOT_DIR="$(cd -P -- "$(dirname -- "$0")" && pwd -P)"
  declare -r OUTPUT_DIR="${ROOT_DIR}/docs"

  declare -r ID_U="$(id -u)"
  declare -r ID_G="$(id -g)"

  echo "Root dir: '${ROOT_DIR}'"
  echo "Output dir: '${OUTPUT_DIR}'"

  rm -rf "${OUTPUT_DIR}"/assets
  mkdir -pv "${OUTPUT_DIR}"/assets/img/
  cp src/logo.png "${OUTPUT_DIR}"/assets/img/
  cp src/_config.yml "${OUTPUT_DIR}"/
  cp src/index.md "${OUTPUT_DIR}"/

  case ${1} in
    cpp)
      gen_cpp
      exit ;;
    dotnet)
      gen_dotnet;;
    java)
      gen_java ;;
    python)
      gen_python ;;
    *)
      gen_all ;;
  esac
}

main "${1:-all}"
