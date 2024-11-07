FROM node:22-bookworm

WORKDIR /var/www/html

COPY ./ /var/www/html

RUN npm install

# RUN npm rebuild bcrypt

CMD ["npm", "run", "dev"]

EXPOSE 3000