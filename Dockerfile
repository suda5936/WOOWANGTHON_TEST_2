FROM node:22-alpine
WORKDIR /app
ARG VITE_API_KEY
COPY package.json server.js ./
COPY public ./public
COPY scripts ./scripts
RUN VITE_API_KEY="$VITE_API_KEY" node scripts/check-env.js
EXPOSE 3000
USER node
CMD ["node", "server.js"]
