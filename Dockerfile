FROM node:14-alpine

WORKDIR /app
ADD . .
RUN npm i && npm run build && npm i -g serve

CMD serve -s build
