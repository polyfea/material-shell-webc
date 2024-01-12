

# build md-shell
FROM node:21 AS fea-build

WORKDIR /workspace

COPY package.json  package-lock.json ./
RUN npm ci

COPY . .

RUN npm run build
RUN npm run precompress
RUN find . -type f -name '*.map' -delete

# create minimalistic httpd image
FROM ghcr.io/polyfea/spa-base as md-shell

EXPOSE 7105

COPY --from=fea-build /workspace/dist/md-shell/ /spa/public/

ENV OTEL_SERVICE_NAME=polyfea-md-shell
ENV SPA_BASE_FALLBACK_DISABLED=true
ENV SPA_BASE_JSON_LOGGING=true

LABEL org.opencontainers.image.authors="Polyfea Contributors"
LABEL org.opencontainers.image.url="https://github.com/polyfea/md-shell/blob/main/readme.md"
LABEL org.opencontainers.image.source="https://github.com/polyfea/md-shell.git"
LABEL org.opencontainers.image.vendor="Polyfea Team"
LABEL org.opencontainers.image.licence="Apache-2.0"
LABEL org.opencontainers.image.title="Polyfea Material Design Shell"
LABEL org.opencontainers.image.description="Material Design application shell for Polyfea ecosystem"