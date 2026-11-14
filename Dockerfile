FROM node:22-alpine
WORKDIR /app
USER node
COPY package.json ./
RUN npm install
COPY server.js ./
COPY public ./public
EXPOSE 3000
CMD ["node", "server.js"]
