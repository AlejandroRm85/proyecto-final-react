FROM node:16-alpine 
WORKDIR /app
COPY package.json ./
RUN yarn install
FROM node:16-alpine AS builder
WORKDIR /app
COPY . .
RUN yarn build
FROM node:16-apline AS runer
WORKDIR /app
ADD . .
ENV NODE_ENV production
RUN addgroup -g 1001 -S nodejs
RUN adduser -S frontend -u 1001
RUN npm install -g serve

USER frontend
EXPOSE 3000
ENV PORT 3000

CMD ["serve", "-s", "build", "-l", "3000"]
