FROM node:alpine

RUN npm install -g nodemon npm install -g ts-node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install && mv ./node_modules /node_modules

COPY . /usr/src/app
COPY ormconfig.docker.json ./ormconfig.json
COPY ormconfig.env .

EXPOSE 3000

CMD [ "nodemon" ]