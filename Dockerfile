# 이미지 사용
FROM node:16-alpine

WORKDIR /usr/src/app

COPY ./package.json ./

RUN yarn install

COPY ./ ./

# 실행
EXPOSE 3000
CMD ["yarn", "start"]