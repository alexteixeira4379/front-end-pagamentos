npm run installFROM node:lts-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "serve" ]

EXPOSE 8080