# Step 1: Build the React app
FROM node:20 AS build

WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application for production
RUN npm run build

# Step 2: Serve the app using a lightweight web server
FROM nginx:alpine

# Copy the build files to the nginx server
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port that nginx will run on
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
