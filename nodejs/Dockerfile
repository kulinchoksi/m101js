FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY . /usr/src/app

# Install app dependencies
RUN npm config set registry http://registry.npmjs.org

ENV PORT 8000
EXPOSE 8000

# CMD ["npm", "start"]
ENTRYPOINT ["/bin/bash"]
CMD ["-c" , "while true; do echo ...; sleep 1; done"]
