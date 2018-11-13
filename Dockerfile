FROM node:10-alpine

ARG demo_version=1.0
ARG port=3000
ENV SM_DEMO_VERSION=$demo_version
ENV SM_PORT=$port

ADD package.json /tmp/package.json
RUN cd /tmp && yarn install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

WORKDIR /opt/app
ADD ./src /opt/app

EXPOSE 3000

CMD [ "/usr/local/bin/node", "index.js" ]