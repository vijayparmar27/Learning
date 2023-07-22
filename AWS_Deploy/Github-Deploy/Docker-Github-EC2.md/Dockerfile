FROM node:18.13.0-alpine3.17
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