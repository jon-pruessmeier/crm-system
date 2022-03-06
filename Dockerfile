FROM node:8.15.0-alpine
ADD . /code
WORKDIR /code
CMD ["node", "server.js"]