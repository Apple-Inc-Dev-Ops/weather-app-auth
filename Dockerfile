# Use Node.js as the base image
FROM node:18-alpine as build-stage

# Set the working directory
WORKDIR /app

# Install system dependencies required by Prisma
RUN apk add --no-cache openssl=3.3.2-r4

# Copy necessary files
COPY package*.json ./
COPY prisma ./prisma/

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the application port
EXPOSE 3030

# Set the startup command
CMD ["sh", "./post_script.sh"]
