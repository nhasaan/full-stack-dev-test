FROM node:12.14.1
LABEL Nazmul Hassan

# Create app directory
WORKDIR /product-api

COPY package*.json ./
COPY *.env ./

RUN npm i -d

COPY . .

EXPOSE 4000

CMD ["npm", "run", "start"]