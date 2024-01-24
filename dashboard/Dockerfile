FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build

# Production stage
FROM node:20-alpine AS production
RUN apk update && apk upgrade && apk add dumb-init
WORKDIR /app
COPY --from=builder /app/next.config.js /app/next.config.js
COPY --from=builder  /app/.next/standalone ./
ENV HOST=0.0.0.0 PORT=3001 NODE_ENV=production
CMD ["dumb-init","node","server.js"]