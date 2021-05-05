FROM alpine:3.13

RUN apk add npm vim && mkdir calculator
RUN npm install express

COPY /srcs /calculator

CMD ["node", "/calculator/calculator.js"]