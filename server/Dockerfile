# FROM node:20-alpine AS builder
# WORKDIR /app
# COPY package*.json ./
# COPY prisma ./prisma/ 
# RUN npm install
# RUN npx prisma migrate dev
# COPY . ./
# RUN npm run build

# #################

# FROM node:20-alpine
# WORKDIR /app
# COPY package*.json ./
# RUN npm install --omit=dev
# COPY --from=builder /app/dist ./
# EXPOSE 8000
# CMD ["npm", "start"]

# FROM node:20-alpine
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY prisma /app/prisma
# RUN npx prisma generate
# COPY . ./

FROM node:20-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY prisma /app/prisma
COPY . ./
RUN npx prisma generate
RUN npm run build  



FROM node:20-alpine 
WORKDIR /app
ENV NODE_ENV production
COPY package*.json ./
RUN npm install --omit=dev
COPY  --from=builder /app/prisma /app/prisma
COPY  --from=builder /app/dist /app/dist
RUN npx prisma generate
EXPOSE 8080
CMD ["npm", "start"]