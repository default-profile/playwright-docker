FROM node:20-bookworm

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npx -y playwright@1.43.1 install firefox --with-deps

ENV PORT=80

EXPOSE $PORT

COPY . .

ENTRYPOINT ["npm", "start"]
