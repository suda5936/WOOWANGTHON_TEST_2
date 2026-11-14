FROM node:22-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY server.js ./
COPY dist ./public
EXPOSE 3000
USER node
CMD ["node", "server.js"]
