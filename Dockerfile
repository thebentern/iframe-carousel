FROM mhart/alpine-node

COPY src/ .

RUN yarn install

EXPOSE 3000

CMD ["npm", "start"]