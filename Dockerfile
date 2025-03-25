FROM node:lts
WORKDIR /app
COPY . .
RUN npm i -g pnpm
RUN pnpm i --force
RUN pnpm approve-builds
RUN pnpm approve-builds -g
RUN pnpm run build
ENTRYPOINT ["node"]
CMD [".output/server/index.mjs"]

#ENTRYPOINT ["tail"]
#CMD ["-f","/dev/null"]
