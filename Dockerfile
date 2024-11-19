FROM node:22
# Create app directory in container
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD ["npm","run","start"]
EXPOSE 5000