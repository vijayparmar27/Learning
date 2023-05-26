FROM node:14.17.3-alpine3.14
RUN addgroup docker_demo && adduser -S -G docker_demo swaggy
WORKDIR /app
RUN mkdir data
COPY package*.json .
RUN chown -R swaggy:docker_demo /app
USER swaggy
RUN npm install
COPY . .
ENV API_URL=http://api.myapp.com/
EXPOSE 3000
CMD [ "npm", "start" ]