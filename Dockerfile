FROM node:8.9

# Override the base log level (info)
ENV NPM_CONFIG_LOGLEVEL warn

# Create app directory
RUN [ "mkdir", "-p", "/usr/src/app" ]
WORKDIR /usr/src/app

ENV PORT=8080
EXPOSE 8080

# Install all dependencies of the current project
COPY package*.json /usr/src/app/
RUN [ "npm", "install" ]

# Copy local files into the image
COPY app       /usr/src/app/app
COPY server.js /usr/src/app/server.js

CMD [ "npm", "start" ]
