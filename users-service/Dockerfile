# STAGE 1
# see https://github.com/sidhantpanda/docker-express-typescript-boilerplate/blob/master/Dockerfile
FROM node:12-alpine as builder

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install
COPY . .

# STAGE 2
FROM builder as production
ENV NODE_PATH='./build'

EXPOSE 4200
RUN yarn run build