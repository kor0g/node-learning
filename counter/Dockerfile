FROM node:alpine

WORKDIR /app

ARG NODE_ENV=production
COPY ./package*.json ./
RUN npm i
COPY src/ ./src

CMD ["npm", "start"]
