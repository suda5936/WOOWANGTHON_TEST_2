FROM node:22-alpine
WORKDIR /app
COPY package.json server.js ./
COPY public ./public
COPY lib ./lib
COPY scripts ./scripts
RUN node scripts/prebuild.js
EXPOSE 3000
USER node
CMD ["node", "server.js"]
