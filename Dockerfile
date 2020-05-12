FROM node
RUN npm install -g jasmine
WORKDIR /work
CMD bash
