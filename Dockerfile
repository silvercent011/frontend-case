FROM node:lts as build-stage

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

RUN rm -rf node_modules && \
    NODE_ENV=production npm install \
    --prefer-offline \
    --pure-lockfile \
    --non-interactive \
    --production=true

FROM node:lts as prod-stage

WORKDIR /app

COPY --from=build-stage /app/.output/  ./.output/

CMD [ "node", ".output/server/index.mjs" ]
