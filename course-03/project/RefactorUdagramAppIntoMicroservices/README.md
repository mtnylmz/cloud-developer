# Cloud Deeveloper 3. Project - Microservices
This repository is associated with Cloud Developer ND - Course 03 - Monolith to Microservices. 

# About project Submision 
Note that I've used local installation; screenshots are availanle on Github

https://github.com/mtnylmz/cloud-developer/tree/master/course-03/project/RefactorUdagramAppIntoMicroservices/Screenshots

* Screenshots of TravisCI which shows the successful build and deploy steps
  travis1.jpg travis2.jpg travis3.jpg  
* Screenshots of kubectl get pod which shows all running containers
  kubectl1.jpg kubectl2.jpg kubectl3.jpg
* Screenshot of the application
  myUdagram.jpg
* The public GitHub repo and the docker hub images

https://github.com/mtnylmz/cloud-developer/
https://github.com/mtnylmz/cloud-developer/tree/master/course-03/project/RefactorUdagramAppIntoMicroservices
https://hub.docker.com/u/mtnylmz


# About the Project - Udagram Image Filtering Microservice
Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice. Following are the services involved in this project:

* “user” - allows users to register and log into a web client, 
* “feed” - allows users to post photos, and process photos using image filtering 
* “frontend” - acts as an interface between the user and the backend-services
* "reverseproxy" - For resolving multiple services running on same port in separate containers

Correspondingly, the project is split into following parts:
1. The RestAPI Feed Backend, a Node-Express feed microservice.
1. The RestAPI User Backend, a Node-Express user microservice.
1. The Simple Frontend - A basic Ionic client web application which consumes the RestAPI Backend.
1. Nginx as a reverse-proxy server, when different backend services are running on the same port, then a reverse proxy server directs client requests to the appropriate backend server and retrieves resources on behalf of the client.  


## Dependencies and Getting Setup
> _tip_: this frontend is designed to work with the RestAPI backends. It is recommended you stand up the backend first, test using Postman, and then the frontend should integrate.

### 1. Installing Node and NPM
This project depends on Nodejs and Node Package Manager (NPM). Before continuing, you must download and install Node (NPM is included) from [https://nodejs.com/en/download](https://nodejs.org/en/download/). Verify the installation of Node.js using following command in your "terminal" / "cmd": 
```
node -v
```
Verify the installation of NPM and update: 
```
npm -v
npm update
```
#### How to Install project dependencies using NPM
This project uses NPM to manage software dependencies. NPM Relies on the package.json file located in the root of this repository. After cloning, open your terminal and run:
```bash
npm install
```
>_tip_: **npm i** is shorthand for **npm install**


### 2. Installing Ionic Cli
The Ionic Command Line Interface is required to serve and build the frontend. Instructions for installing the CLI can be found in the [Ionic Framework Docs](https://ionicframework.com/docs/installation/cli). When we would configure and start the backend services, then the frontend server can be started using following command in the terminal:

```bash
ionic serve
```
### 3. AWS RDS - PostgreSQL instance, Postbird tool, and an S3 bucket
You'll need an AWS account to set up these resources. 

### 4. Docker Desktop
Lesson 3 of this course would require you to install Docker Desktop to create containers for individual microservices. Refer the following links for instructions 
* [macOS](https://docs.docker.com/docker-for-mac/install/), 
* [Windows 10 64-bit: Pro, Enterprise, or Education](https://docs.docker.com/docker-for-windows/install/), 
* [Windows  10 64-bit Home](https://docs.docker.com/toolbox/toolbox_install_windows/). 
* You can find installation instructions for other operating systems at:  https://docs.docker.com/install/

### 5. Kubernetes 
Lesson 4 of this course would require you to install any one tool for creating a Kubernetes cluster - KubeOne / Minikube / kubectl on top of Docker Desktop. Refer - 

### 6. Travis CI
Lesson 6 of this course would require you to use Travis CI. You would have to sign-up on  Travis-ci.com using your GitHub account credentials and then create a `.travis.yml` for your project. [Refer this tutorial to get started with Travis CI](https://docs.travis-ci.com/user/tutorial/).
