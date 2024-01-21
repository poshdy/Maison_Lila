FROM node:20-slim
WORKDIR /app
COPY package*.json ./
COPY prisma ./prisma/ 
RUN npm install
COPY . ./
EXPOSE 8000
CMD [ "npm" , "start" ]