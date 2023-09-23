FROM node:19
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY public/ /usr/src/app/public
COPY src/ /usr/src/app/src
COPY package.json /usr/src/app/


RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]