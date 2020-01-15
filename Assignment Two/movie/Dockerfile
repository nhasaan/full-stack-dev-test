FROM node:12.14.1
LABEL Nazmul Hassan

# Create app directory
WORKDIR /movie

COPY package*.json ./
COPY *.env ./

RUN npm i -d

COPY . .

EXPOSE 3000

CMD ["npm", "start"]