FROM node:lts
WORKDIR /usr/src/app

COPY ./output ./
WORKDIR /usr/src/app/output/server

EXPOSE 3000
#CMD ["node", "server/index.mjs"]
