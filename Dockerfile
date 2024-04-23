FROM node:20-bookworm

WORKDIR /app

RUN npx -y playwright@1.43.1 install firefox --with-deps

COPY package*.json ./

RUN npm install

ENV PORT=3000

EXPOSE $PORT

COPY . .

ENTRYPOINT ["npm", "start"]
