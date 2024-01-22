FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
COPY prisma ./prisma/ 
RUN npm install --omit=dev
COPY . ./
EXPOSE 8000
CMD [ "npm" , "start" ]