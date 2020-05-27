FROM node:alpine3.10

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm install


EXPOSE 3000

CMD ["npm", "run", "start"]