FROM node:16
ENV NODE_ENV development

WORKDIR /home/node/app/web

COPY package.json .
COPY yarn.lock .
RUN yarn install
# Copy app files
COPY . /home/node/app/web
# Expose port
EXPOSE 3000
# Start the app
CMD [ "yarn", "start" ]
