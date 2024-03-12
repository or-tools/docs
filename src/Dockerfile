# Create a virtual environment with all tools installed
# ref: https://hub.docker.com/_/alpine
FROM alpine:edge AS env

#############
##  SETUP  ##
#############
ENV PATH=/usr/local/bin:$PATH
RUN apk add --no-cache \
 wget git \
 linux-headers build-base xfce4-dev-tools cmake \
 doxygen
ENTRYPOINT ["/bin/sh", "-c"]
CMD ["/bin/sh"]

# Install Swig
RUN apk add --no-cache swig

# Install .Net
# ref: https://learn.microsoft.com/en-us/dotnet/core/install/linux-alpine#install-net-6
RUN apk add --no-cache dotnet6-sdk
# Trigger first run experience by running arbitrary cmd
RUN dotnet --info

# Install Java
ENV JAVA_HOME=/usr/lib/jvm/java-1.8-openjdk
RUN apk add --no-cache openjdk8 maven

# Install Python
RUN apk add --no-cache python3-dev py3-pip py3-wheel \
 py3-numpy py3-pandas py3-matplotlib py3-scipy
RUN rm -f /usr/lib/python3.*/EXTERNALLY-MANAGED
RUN python3 -m pip install absl-py mypy mypy-protobuf pdoc immutabledict

################
##  OR-TOOLS  ##
################
FROM env AS devel
WORKDIR /root
ENV DISTRIBUTION=alpine-edge

# Download sources
# use SRC_GIT_SHA1 to modify the command
# i.e. avoid docker reusing the cache when new commit is pushed
ARG ORTOOLS_GIT_BRANCH
ENV ORTOOLS_GIT_BRANCH ${ORTOOLS_GIT_BRANCH:-stable}
RUN git clone -b "${ORTOOLS_GIT_BRANCH}" --single-branch --depth=1 https://github.com/google/or-tools
WORKDIR /root/or-tools

# C++
FROM devel AS cpp
RUN cmake -S. -Bbuild -DBUILD_DOC=ON \
 -DBUILD_DEPS=ON \
 -DBUILD_CXX_SAMPLES=OFF -DBUILD_CXX_EXAMPLES=OFF
RUN cmake --build build --target ortools_cxx_doc -j8 -v

# .Net
FROM devel AS dotnet
RUN cmake -S. -Bbuild -DBUILD_DOC=ON \
 -DBUILD_DOTNET=ON \
 -DBUILD_CXX_SAMPLES=OFF -DBUILD_CXX_EXAMPLES=OFF
RUN cmake --build build --target ortools_dotnet_doc -j8 -v

# Java
FROM devel AS java
RUN cmake -S. -Bbuild -DBUILD_DOC=ON \
 -DBUILD_JAVA=ON \
 -DBUILD_CXX_SAMPLES=OFF -DBUILD_CXX_EXAMPLES=OFF
RUN cmake --build build --target ortools_java_doc -j8 -v
RUN cmake --build build --target ortools_javadoc_doc -j8 -v

# Python
FROM devel AS python
RUN cmake -S. -Bbuild -DBUILD_DOC=ON \
 -DBUILD_PYTHON=ON -DVENV_USE_SYSTEM_SITE_PACKAGES=ON \
 -DBUILD_CXX_SAMPLES=OFF -DBUILD_CXX_EXAMPLES=OFF
RUN cmake --build build --target ortools_python_doc -j8 -v
RUN cmake --build build --target ortools_pdoc_doc -j8 -v
