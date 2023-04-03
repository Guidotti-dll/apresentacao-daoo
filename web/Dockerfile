FROM node:16
ENV NODE_ENV development


RUN mkdir -p /home/node/app/web/node_modules

WORKDIR /home/node/app/web

COPY package.json yarn.* ./

RUN yarn
# Copy app files
COPY . /home/node/app/web

# Expose port
EXPOSE 3000

RUN echo "$PWD"
# Start the app
CMD ["yarn", "start" ]
