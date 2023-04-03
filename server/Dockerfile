FROM node:16

RUN mkdir -p /home/node/app/server/node_modules

WORKDIR /home/node/app/server/

COPY package.json yarn.* ./

RUN yarn

COPY . /home/node/app/server/


EXPOSE 3333

# CMD ["node","ace","serve","--watch"]
CMD ["yarn", "dev"]
