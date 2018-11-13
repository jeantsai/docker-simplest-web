#!/bin/bash
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker push jeantsai/simple-demo-microservice:1.0
docker push jeantsai/simple-demo-microservice:2.0
docker push jeantsai/simple-demo-microservice:3.0
