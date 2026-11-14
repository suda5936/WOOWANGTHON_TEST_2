FROM node:22-alpine
WORKDIR /app
ARG MEMO_THEME
COPY package.json server.js ./
COPY public ./public
COPY scripts ./scripts
RUN MEMO_THEME="$MEMO_THEME" node scripts/apply-theme.js
EXPOSE 3000
USER node
CMD ["node", "server.js"]
