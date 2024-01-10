# build busybox with httpd only
FROM alpine:3.13.2 AS busybox-builder

RUN apk add gcc musl-dev make perl
RUN wget https://busybox.net/downloads/busybox-1.35.0.tar.bz2 \
  && tar xf busybox-1.35.0.tar.bz2 \
  && mv /busybox-1.35.0 /busybox

WORKDIR /busybox
COPY build/docker/busybox.config ./.config
RUN make && make install
RUN adduser -D static

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
FROM scratch

EXPOSE 3000


COPY --from=busybox-builder /etc/passwd /etc/passwd
COPY --from=busybox-builder /busybox/_install/bin/busybox /

USER static
WORKDIR /home/static
COPY build/docker/httpd.conf .

COPY --from=fea-build /workspace/dist/md-shell .

# Run busybox httpd
CMD ["/busybox", "httpd", "-f", "-v", "-p", "7100", "-c", "httpd.conf"]
