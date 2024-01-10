FROM node:20-alpine
EXPOSE 4173
WORKDIR /frontend-react
COPY .env.example .env
COPY . .
RUN npm install
RUN npm run build
CMD [ "npm","run","preview"]