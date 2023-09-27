#!/bin/bash

BRANCH=$(git symbolic-ref --short HEAD)

if [ "$BRANCH" = "master" ]; then
  echo "Validating on production"
  npm-run-all --parallel check-types prettier lint && yarn build

elif [ "$BRANCH" = "sandbox" ]; then
  echo "Validating on sandbox"
  npm-run-all --parallel check-types prettier lint && yarn build

elif [ "$BRANCH" = "staging" ]; then
  echo "Validating on staging"
  npm-run-all --parallel check-types prettier lint && yarn build

else
  echo "Validating on development"
  npm-run-all --parallel check-types prettier lint
fi
