# m101js
M101JS: MongoDB for Node.js Developers
https://university.mongodb.com/courses/MongoDB/M101JS/2016_May/syllabus

## This repository is to create docker environment to work with above course or in general with NodeJs and MongoDB environment.

## Steps to enable docker environment:
1. Go to your working directory
```
cd /var/www/docker/
```

2. Clone this git repository
```
git clone https://github.com/kulinchoksi/m101js
```

3. Go inside base directory and start docker containers
```
cd m101js
docker-compose up -d
```

4. You should see two containers running for NodeJs and MongoDB, which you can see with following command:
```
docker-compose ps
```

If you don't see containers in running mode then you can contact me for debugging
but first you can get hint by checking docker logs:
```
docker logs <container-name>
```

5. Next time, when you boot your machine again, to start containers again, just run following command: (haven't configured for auto-start for now)
```
docker-compose start
```

### To get into any running container:
```
docker exec -it <container-name> /bin/bash
```

### Following is the path of MongoDb data directory which is a shared volume in MongoDb container:
```
cd /data
```
