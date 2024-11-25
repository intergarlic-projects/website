FROM node:lts-alpine
RUN apk update
RUN apk upgrade
RUN apk add git
ENV NODE_ENV=production
WORKDIR /usr/src/app
RUN git clone https://github.com/intergarlic-projects/website.git .
RUN npm install --silent && mv node_modules ../
COPY . .
EXPOSE 9107
RUN chown -R node /usr/src/app
USER node
RUN npm run build
CMD ["npm", "run", "start", "-p 9107"]