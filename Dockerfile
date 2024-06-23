FROM node AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./

FROM nginx
COPY --from=build . /usr/share/nginx/html/
