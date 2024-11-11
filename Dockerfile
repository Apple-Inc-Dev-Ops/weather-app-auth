FROM node:22-bookworm

WORKDIR /var/www/html

COPY ./ /var/www/html

RUN npm install

CMD ["npm", "run", "dev"]

EXPOSE 3000