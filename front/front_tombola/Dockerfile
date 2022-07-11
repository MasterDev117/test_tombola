# Dockerfile

FROM node:16.15-alpine3.14
RUN mkdir -p /opt/ui
WORKDIR /opt/ui
RUN adduser -S ui
COPY package*.json ./
RUN npm install
RUN chown -R ui /opt/ui
USER ui
EXPOSE 8080
CMD [ "npm", "start" ]