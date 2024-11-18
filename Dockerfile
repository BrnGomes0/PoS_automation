FROM node:18-alpine

ENV http_proxy=http://172.0.0.1:3128 \
    https_proxy=http://172.0.0.1:3128 

WORKDIR /app

COPY package.json package-lock.json* ./

RUN rm -rf node_modules

EXPOSE 5173

COPY . .

RUN npm install

CMD [ "npm", "run", "dev"]