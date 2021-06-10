# devops-project
URL- https://devopsproject-yytya6w6fa-uc.a.run.app

Setup

Create a new Google Cloud Project (or select an existing project).

<Enable the Cloud Run API>.

[Create a Google Cloud service account] or select an existing one.

Add the the following Cloud IAM roles to your service account:

Cloud Run Admin - allows for the creation of new Cloud Run services

Service Account User - required to deploy to Cloud Run as service account

Storage Admin - allow push to Google Container Registry

Download a JSON service account key for the service account.

Add the following [secrets to your repository's secrets][gh-secret]:

GCP_PROJECT: Google Cloud project ID

GCP_SA_KEY: the downloaded service account key

get updates about what’s happening on GitHub--with Slack notification

![Screenshot (376)](https://user-images.githubusercontent.com/79751930/121505001-0744b780-ca15-11eb-9c13-535f503026b5.png)



