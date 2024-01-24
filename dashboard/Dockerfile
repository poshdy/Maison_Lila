



FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build

# Production stage
FROM node:20-alpine AS production
WORKDIR /app
ENV NODE_ENV production
COPY package*.json ./
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/.next ./.next
EXPOSE 3000
CMD ["npm", "start"]