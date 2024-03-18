FROM node:20-alpine as developement

WORKDIR /app

COPY package*.json .

RUN npm install

COPY .  .

RUN npx prisma generate

RUN npm run build



FROM node:20-alpine as production

ARG NODE_ENV="production"

ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package*.json .

RUN npm install --omit=dev

COPY --from=developement /app/prisma /app/prisma

COPY --from=developement ./app/dist ./dist

RUN npx prisma generate


CMD [ "node" ,"dist/server.js" ]











# FROM node:20-alpine as builder
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY prisma /app/prisma
# COPY . ./
# RUN npx prisma generate
# RUN npm run build  
# CMD [ "npm","run","dev" ]



# FROM node:20-alpine 
# WORKDIR /app
# ENV NODE_ENV production
# COPY package*.json ./
# RUN npm install --omit=dev
# COPY  --from=builder /app/prisma /app/prisma
# COPY  --from=builder /app/dist /app/dist
# RUN npx prisma generate
# EXPOSE 8080
# CMD ["npm", "start"]