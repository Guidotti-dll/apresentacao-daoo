FROM node:18

RUN mkdir -p /home/node/app/node_modules

WORKDIR /home/node/app/server

COPY package.json yarn.* ./

# RUN npm i -g yarn

RUN yarn

COPY . /home/node/app/server


EXPOSE 3333

# CMD ["node","ace","serve","--watch"]
CMD ["yarn", "dev"]
