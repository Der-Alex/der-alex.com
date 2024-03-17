FROM node:lts
WORKDIR /app
COPY . .
RUN npm i -g pnpm; pnpm i; pnpm run build;
ENTRYPOINT ["node"]
CMD [".output/server/index.mjs"]

#ENTRYPOINT ["tail"]
#CMD ["-f","/dev/null"]