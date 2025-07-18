FROM node:22.17.1-alpine

ARG USERNAME=node

ARG USER_UID=1000
ARG USER_GID=$USER_UID

RUN apk --no-cache add shadow bash

RUN groupmod --gid $USER_GID $USERNAME \
    && usermod --uid $USER_UID --gid $USER_GID $USERNAME \
    && chown -R $USER_UID:$USER_GID /home/$USERNAME

# glibc support
RUN apk add --no-cache curl && \
    curl -Lo /etc/apk/keys/sgerrand.rsa.pub https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub && \
    curl -Lo glibc-2.35-r1.apk https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.35-r1/glibc-2.35-r1.apk && \
    apk add --no-cache glibc-2.35-r1.apk && \
    rm glibc-2.35-r1.apk

RUN npm install -g vite@latest

WORKDIR /app

USER $USERNAME
