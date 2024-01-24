# FROM node:20-bullseye-slim
# WORKDIR /app
# COPY package*.json .
# RUN npm install
# COPY . ./
# RUN npm run build
# EXPOSE 4000
# CMD [ "npm", "start" ]
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install 

COPY . .

RUN npm run build

# Production stage
FROM node:20-alpine AS production

WORKDIR /app

ENV NODE_ENV production

COPY package*.json ./

COPY --from=builder /app/.next ./.next


EXPOSE 3000

CMD ["npm", "start"]