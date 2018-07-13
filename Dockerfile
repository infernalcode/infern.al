# build stage
FROM node:9.11.1-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:1.13.12-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
RUN sed -i 's/listen.*80;/listen 8080;/' /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
