# stage 1
FROM node as builder
WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .
RUN npm run build

# stage 2
FROM httpd:2-alpine
COPY --from=builder ./app/build/ /usr/local/apache2/htdocs/
COPY --from=builder ./app /
EXPOSE 80

# FROM alpine
# CMD [ "/usr/sbin/httpd", "-D", "foreground"]