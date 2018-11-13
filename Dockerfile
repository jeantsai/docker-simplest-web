FROM node:10-alpine

EXPOSE 3000
CMD [ "/usr/local/bin/node", "index.js" ]

ADD package.json /tmp/package.json
RUN cd /tmp && yarn install && mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

WORKDIR /opt/app
ADD ./src /opt/app

ARG demo_version=1.0
ARG port=3000
ENV SM_DEMO_VERSION=$demo_version
ENV SM_PORT=$port