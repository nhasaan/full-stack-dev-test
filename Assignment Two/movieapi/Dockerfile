FROM node:12.14.1
LABEL Nazmul Hassan

#Create work dir
WORKDIR /movie-api

COPY package*.json ./
COPY *.env ./

RUN npm i -d

COPY . .

EXPOSE 2000

CMD ["npm", "run", "start"]