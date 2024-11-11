FROM node:18-alpine as build-stage

WORKDIR /app

COPY package*.json ./

COPY prisma ./prisma/

RUN npm install

COPY . .

EXPOSE 3030

CMD ["sh", "./post_script.sh"]
