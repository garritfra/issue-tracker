FROM node:alpine as build
WORKDIR /app
COPY . .
RUN npm i && npm run build


FROM node:alpine
WORKDIR /app
COPY --from=build /app .


CMD [ "node", "dist/server.js" ]