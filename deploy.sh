#!/bin/bash

#remove package-lock.json and node_module
rm -rf package-lock.json
rm -rf node_module

#install dependencies
echo "Installing dependencies..."
npm install

# Build the project
echo "Building the project..."
npm run build

# update pm2 server
echo "updating pm2 server"
pm2 restart back-end

# Install and  Start the application with PM2
#echo "Installing PM2..."
#npm install -g pm2

#Configure PM2 to start on system boot
#echo "Starting the application with PM2..."
#pm2 start npm --name "back-end" -- start

#echo "Configuring PM2 to start on system boot..."
#pm2 startup systemd
#pm2 save
