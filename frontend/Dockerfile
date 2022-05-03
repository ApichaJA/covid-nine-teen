FROM node:14-alpine
WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
RUN apk add g++ make python3
RUN yarn install
COPY . .
