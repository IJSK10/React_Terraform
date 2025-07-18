FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY . .

RUN npm install && npm run build

FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

