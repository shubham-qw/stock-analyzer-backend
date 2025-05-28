FROM node:20-alpine

WORKDIR /urs/local/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8090

CMD ["npm", "start"]