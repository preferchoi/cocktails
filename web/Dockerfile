FROM node:24.0.7
WORKDIR /usr/src/app/web
COPY package*.json ./
RUN npm cache clean --force
RUN npm install
COPY . .
ENV PATH="./node_modules/.bin:$PATH"
EXPOSE 3000
CMD ["npm", "start"]