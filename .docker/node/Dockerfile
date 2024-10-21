FROM ubuntu:20.04

ARG DEBIAN_FRONTEND=noninteractive

WORKDIR /var/www/html

RUN apt-get update

RUN apt-get install -y --no-install-recommends \
    vim \
    git \
    supervisor \
    htop \
    software-properties-common

RUN apt-get install nodejs -y

RUN apt-get install npm -y

CMD ["npm", "run", "dev"]

EXPOSE 3000
