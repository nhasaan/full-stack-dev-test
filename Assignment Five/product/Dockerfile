FROM node:12.14.1
LABEL Nazmul Hassan

# Create app directory
WORKDIR /product

COPY package*.json ./
COPY *.env ./

RUN npm i -d

COPY . .

EXPOSE 3300

CMD ["npm", "start"]