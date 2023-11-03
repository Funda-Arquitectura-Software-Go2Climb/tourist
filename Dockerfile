# Use an official Node.js runtime as a parent image
FROM node:18.15.0

# Set the working directory in the container
WORKDIR /usr/src

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of your application's source code to the container
COPY . .

# Expose a port (e.g., 3000) that your Node.js app will listen on
EXPOSE 3000

# Define the command to run your Node.js application
CMD ["node", "server.js"]