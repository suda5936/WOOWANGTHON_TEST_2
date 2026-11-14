FROM node:22-alpine
WORKDIR /app
COPY package.json tsconfig.json ./
RUN npm install
COPY src ./src
RUN npm run typecheck
COPY server.js ./
COPY public ./public
EXPOSE 3000
USER node
CMD ["node", "server.js"]
