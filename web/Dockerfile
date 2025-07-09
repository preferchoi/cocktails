# 1) React 빌드
FROM node:lts-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 2) Nginx로 정적 + 프록시
FROM nginx:alpine
# React 빌드 산출물 복사
COPY --from=builder /app/build /usr/share/nginx/html
# 우리가 만든 server 블록만 덮어쓰기
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
