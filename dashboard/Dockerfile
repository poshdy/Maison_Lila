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
ENV NODE_ENV production
COPY --from=builder package*.json ./
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/.next /app/.next
EXPOSE 3000
CMD ["npm", "start"]