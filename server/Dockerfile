FROM node:lts-alpine
WORKDIR /usr/src/app/server
COPY package*.json ./
RUN npm cache clean --force
RUN npm install
COPY . .
ENV PATH="./node_modules/.bin:$PATH"
EXPOSE 4000
CMD ["npm", "start"]