FROM node:16

# 패키지 먼저 설치하기
RUN mkdir myfolder
COPY ./package.json /myfolder
COPY ./yarn.lock /myfolder
WORKDIR /myfolder
RUN yarn install

# 소스코드 복사하기
COPY . /myfolder/
RUN yarn build

# 프로그램 실행
CMD yarn start