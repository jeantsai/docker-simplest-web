#!/bin/bash
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker push jeantsai/simplest-microservice:1.0
docker push jeantsai/simplest-microservice:2.0
docker push jeantsai/simplest-microservice:3.0
