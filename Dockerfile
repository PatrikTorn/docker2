FROM node:12

RUN npm install

COPY . .

EXPOSE 8080
CMD [ "node", "/server/index.js" ]