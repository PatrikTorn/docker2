FROM node:12
WORKDIR /client
RUN npm install

COPY . .

EXPOSE 8081
CMD [ "node", "index.js" ]