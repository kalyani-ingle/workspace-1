FROM ubuntu:latest

# Install dependencies
RUN apt-get update && apt-get install -y \
    curl \
    git \
    nodejs \
    npm

# Install yarn
RUN npm install -g yarn

# Set working directory
WORKDIR /vscode-build

# Copy repository contents
COPY . .

# Add "quality": "stable" to product.json
RUN sed -i 's/"quality": ".*"/"quality": "stable"/' product.json

# Install dependencies and build
RUN yarn install && \
    yarn gulp vscode-reh-web-linux-x64-min

# Expose port 8000
EXPOSE 8000

# Set the entrypoint
ENTRYPOINT ["./bin/runcode", "--default-folder", "/workspace"]