FROM node:latest

WORKDIR /app

COPY . .

RUN npm install
RUN npm install -g json-server
RUN npm run build

EXPOSE 3000
EXPOSE 3001

CMD ["sh", "-c", "json-server ./src/db/db.json --port 3001 & npm start"]
