FROM node:8 as react-build
RUN apt-get update && apt-get -y install rsync

WORKDIR /app

COPY . ./
RUN yarn
RUN yarn build
