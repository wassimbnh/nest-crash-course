# Use a Node.js base image with a specific version
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install build dependencies for bcrypt
RUN apt-get update && \
    apt-get install -y build-essential && \
    apt-get clean

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose a port for the application to listen on
EXPOSE 3000

# Set the command to run the application
CMD [ "npm", "start" ]
