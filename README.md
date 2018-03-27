# REST demo: Node.js backend
A simple demonstration of a RESTful web service in Node.js

This repository implements a REST web service for managing a simple database of bookmarks.  Each bookmark consists of
a name (the link text) and the URL that it should link to.  Using this API, you can perform all of the standard "CRUD"
operations (Create, Read, Update, Delete) on these bookmarks.

This repository is part of my REST API demonstration project.  For more information on this project, including a list
of all available frontends and backends, please visit the following repo:
* [rest-demo](https://github.com/bmarcotte/rest-demo/)

## Installation and Deployment

There are configuration files in this repository to support installing and deploying this code through two different
methods.  Following the instructions for any one of these methods should setup a local running instance of this API
application.

### Method 1: Using Docker & docker-compose (preferred)

The easiest way to try out the code in this repository is via the docker-compose method described in the README for the
main rest-demo project:
* [README.md: Method 1: Using Docker & docker-compose (preferred)](https://github.com/bmarcotte/rest-demo/blob/master/README.md#method-1-using-docker--docker-compose-preferred)

To request this backend specifically, make sure your docker-compose command is prefixed with `BACKEND=node`, like so:
```
> BACKEND=node docker-compose up -d --build
```

For more details, please see the "Method 1" section in the README link above.

### Method 2: Using Docker without docker-compose

Requirements:
* [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) - version 1.7.10 or later recommended
* [Docker](https://www.docker.com/get-docker) - version 17.05 or later

This method will build a Docker image for this application, and then create and run a container instance based on it.

Run the following commands to use this method:
```
> docker build -t bookmarkapi:deploy https://github.com/bmarcotte/rest-demo-node-backend.git
> docker run --name bookmarkapi -p 8080:8080 -d bookmarkapi:deploy
```

### Method 3: Using node and npm

Requirements:
* [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) - version 1.7.10 or later recommended
* [node](https://nodejs.org/en/download/) - version 6.12 or later
* [npm](https://www.npmjs.com/get-npm) - version 5.6 or later

If Docker is not available, you can try manually building and installing the application via this method.

Run the following commands to use this method:
```
git clone https://github.com/bmarcotte/rest-demo-node-backend.git
cd rest-demo-node-backend
npm install
npm run start-dev
```
## Testing

Requirements:
* [npm](https://www.npmjs.com/get-npm) - version 5.6 or later

This repository includes a simple test suite that can be invoked with the following command:

```
npm test
```

For details on how to do more extensive functional endpoint testing of this backend web service, please see the
following documentation in my [rest-demo](https://github.com/bmarcotte/rest-demo) project repository:
* [TESTING.md](https://github.com/bmarcotte/rest-demo/blob/master/TESTING.md)

## Author

* **Ben Marcotte** - [bmarcotte](https://github.com/bmarcotte)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
