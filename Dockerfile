# Base image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Create auth directory if it doesn't exist
RUN mkdir -p src/auth

# Create a placeholder for Firebase credentials
RUN echo '{"project_id": "${FIREBASE_PROJECT_ID}", "private_key": "${FIREBASE_PRIVATE_KEY}", "client_email": "${FIREBASE_CLIENT_EMAIL}"}' > src/auth/esimServiceAccount.json

# Creates a "dist" folder with the production build
RUN npm run build

# Start the server using the production build
CMD [ "npm", "run", "start:prod" ]
