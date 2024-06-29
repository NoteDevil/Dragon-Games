 FROM node:20.5.1  
 WORKDIR /usr/src/app  
 COPY package*.json ./  
 COPY entrypoint.sh ./  
 RUN npm install  
 COPY . .
 RUN chmod +x /usr/src/app
 RUN chmod +x /usr/src/app/entrypoint.sh
 RUN npx prisma generate --schema=/usr/src/app/prisma/schema.prisma  
#  RUN npm run build
 ENTRYPOINT ["/usr/src/app/entrypoint.sh", "npm", "run", "client_dev"]  
 CMD ["npm", "run", "client_dev"]