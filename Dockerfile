FROM node:15.2.0 as build-env
LABEL Infrastructure <infrastructure@captalys.com.br>

USER root
WORKDIR /app
COPY . .

RUN yarn
RUN yarn lint
RUN yarn build
# RUN [ "$(git symbolic-ref --short HEAD)" = "master" ] && yarn release

FROM httpd:2.4

COPY --from=build-env /app/website/build/ /usr/local/apache2/htdocs/
