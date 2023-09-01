FROM node:10 AS ui-build
WORKDIR /usr/src/app
COPY client/ ./client/
RUN cd client && npm install && npm run build

FROM node:10 AS server-build
WORKDIR /root/
COPY --from=ui-build /usr/src/app/client/build ./client/build
COPY backend/package*.json ./backend/
RUN cd backend && npm install
COPY backend/app.js ./backend/

EXPOSE 3080

CMD ["node", "./backend/app.js"]