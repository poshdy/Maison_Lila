FROM node:20-alpine
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . ./
RUN npm run build 
EXPOSE 3000
CMD [ "npm","start" ]

# FROM node:20-alpine AS builder
# WORKDIR /app
# COPY package*.json ./
# RUN npm ci
# COPY . ./
# RUN npm run build

# # Production stage
# FROM node:20-alpine AS production
# WORKDIR /app
# COPY --from=builder /app/next.config.js /app/next.config.js
# COPY --from=builder  /app/.next/standalone ./
# ENV PORT=3000 NODE_ENV=production
# CMD ["node","server.js"]