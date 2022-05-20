| Name      | Service | Container        | Tech                | Port |
| --------- | ------- | ---------------- | ------------------- | ---- |
| nginx     |         | nginx            | nginx               | 4000 |
| Web       | Web     | app-ui           | React, React-Router | 4100 |
| Users API | Users   | users-service    | Node, Express       | 4200 |
| Users DB  | Users   | users-service-db | MySQL               | 4201 |
| DB Panel  | Users   | phpmyadmin       | PHP, PHPMyAdmin     | 4300 |

NOTES

To build an image:
`docker build --no-cache -f Dockerfile -t app-ui .`
`docker build --no-cache -f Dockerfile -t users-service .`

To test said image:
`docker run -it -p 4100:3000 app-ui`
`docker run -it -p 4200:4200 users-service`

To start the container in production:
`docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d `

PROGRESS

- [x] Set up a reverse proxy via nginx on port 4000
- [x] Got main traffic sent to 4000 sent to app-ui on port 4100
- [x] Set up a basic user service that returns a "hello world" and was able to get the API call proxied via a relative URL

LINKS

- [Writing a Docker File For Your Node js Typescript Microservice](https://towardsdev.com/writing-a-docker-file-for-your-node-js-typescript-micro-service-c5170b957893)
- [Setting up Docker + TypeScript + Node (Hot reloading code changes in a running container)](https://dev.to/dariansampare/setting-up-docker-typescript-node-hot-reloading-code-changes-in-a-running-container-2b2f)
- [Dockerize your React App](https://dev.to/karanpratapsingh/dockerize-your-react-app-4j2e)
  [Designing Microservices with ExpressJS](https://itnext.io/designing-microservices-with-expressjs-eb23e4f02192)
