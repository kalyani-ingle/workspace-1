FROM ubuntu:20.04

ENV DEBIAN_FRONTEND=noninteractive

# Ensure essential packages are installed
RUN apt-get update && apt-get install -y \
    curl \
    git \
    nodejs \
    npm \
    yarn \
    build-essential \
    pkg-config \
    libx11-dev \
    libxkbfile-dev \
    libsecret-1-dev \
    python3 \
    libkrb5-dev \
    libgssapi-krb5-2 \
    bash

# Verify shell exists
RUN ls -l /bin/sh && sh --version

# Install Node.js 20.x
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs

# Verify Node.js and npm installation
RUN node --version && npm --version

WORKDIR /vscode-build

# Clone specific tag of vscode
RUN git clone https://github.com/microsoft/vscode.git --branch=1.92.0 . && \
    git checkout tags/1.92.0

# Add "quality": "stable" to product.json
RUN sed -i 's/"quality": ".*"/"quality": "stable"/' product.json

# Install dependencies and build
RUN bash -c "yarn --network-timeout 100000 && \
    yarn gulp vscode-reh-web-linux-x64-min"

EXPOSE 8000

ENTRYPOINT ["./bin/runcode", "--default-folder", "/workspace"]