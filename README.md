# devops-project
url- https://devopsproject-yytya6w6fa-uc.a.run.app

#Setting up Continuous Integration with Cloud Build

The first step to Continuous Deployment is to have Continuous Integration configured. Cloud Build is a service that runs on demand and executes a series of commands. We can easily configure it through the website and connect it with Github to setup webhook so that each time to commit Cloud Build will get notified.

Create a small example app

Creating a small node.js server

The command to start the server
CMD node server.js

Creating a docker image

Push it to Github

Setting up Continuous Integration with Cloud Build

Creating a new project

Setting up Cloud Build

Deploying and running on Cloud Run

Deploy a new version manually

Deploying automatically with Cloud Build

Defining build steps in cloudbuild.yaml

Pushing the docker image

Add the final step, deploying with the gcloud cli

Running gcloud and deploy cloud run

Add gcloud command to cloud build

Permission denied on Cloud Build


get updates about what’s happening on GitHub--with Slack notification
