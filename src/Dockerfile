# Create a virtual environment with all tools installed
# ref: https://hub.docker.com/_/archlinux/
FROM archlinux:latest AS env

#############
##  SETUP  ##
#############
ENV PATH=/usr/local/bin:$PATH
RUN pacman -Syu --noconfirm git base-devel cmake doxygen
ENTRYPOINT ["/bin/bash", "-c"]
CMD [ "/bin/bash" ]

# Install Swig
RUN pacman -Syu --noconfirm swig

# Install .Net
RUN pacman -Syu --noconfirm dotnet-sdk
# Trigger first run experience by running arbitrary cmd
RUN dotnet --info

# Install Java
RUN pacman -Syu --noconfirm jdk-openjdk maven
ENV JAVA_HOME=/usr/lib/jvm/default

# Install Python
RUN pacman -Syu --noconfirm python python-pip \
 python-wheel python-virtualenv python-setuptools \
 python-numpy python-pandas python-matplotlib \
 python-immutabledict python-scipy python-requests \
 pdoc
RUN python -m pip install --break-system-package \
 absl-py mypy mypy-protobuf

################
##  OR-TOOLS  ##
################
FROM env AS devel
ENV DISTRIBUTION=archlinux

WORKDIR /root

# Download sources
# use SRC_GIT_SHA1 to modify the command
# i.e. avoid docker reusing the cache when new commit is pushed
ARG ORTOOLS_GIT_BRANCH
ENV ORTOOLS_GIT_BRANCH=${ORTOOLS_GIT_BRANCH:-v9.14}
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
