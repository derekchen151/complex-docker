FROM node:alpine as builder

WORKDIR '/app'

COPY package.json ./

RUN npm install

COPY ./ ./

RUN npm run build

FROM nginx:alpine

EXPOSE 4200

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/build /usr/share/nginx/html
