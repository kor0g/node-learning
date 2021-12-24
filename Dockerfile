FROM node:15.14
WORKDIR /app
COPY package.json ./
COPY src ./
EXPOSE 3000
CMD ["npm", "start"]