---
layout: page
exclude: true
title: "Firebase and Firestore Setup"
excerpt: "How to set up Firebase"
permalink: guides/firebase
---

## Create a Firestore Database

1. Go to the [Firebase console](https://console.firebase.google.com), login to Google and select Create a project
![Create Project](../assets/firestore/create_project.png)

2. Name your app
![Name app](../assets/firestore/name.png)

3. Enable Google Analytics (this is not necessary for now but you may this useful later).
![Google Analytics](../assets/firestore/ganalytics1.png)

4. Choose 'Default Account for Firebase' and select Create Project
![Google Analytics](../assets/firestore/ganalytics2.png)

5. In the left sidebar click on build and from the dropdown selection Firestore Database
    ![Build Menu](../assets/firestore/build-menu.png)

6. Click Create database
    ![Create Firestore](../assets/firestore/create_firestore.png)

6. Select Start in Test Mode, then press next
![Test Mode](../assets/firestore/test_mode.png)

7. Select europe-west2 (London) as the location of your database
![Location](../assets/firestore/location.png)

8. Return to console
![Console](../assets/firestore/console.png)


## Create Credentials

1. To get the credentials you need for web app, go to the cog and select Project Settings from the drop down.

    ![Project Settings](../assets/firestore/project-settings-menu.png)

2. Under your apps you will see a blue button with angle brackets, click here and register your project name when prompted.

    ![Project Settings](../assets/firestore/project-settings.png)

3. Create your app credentials
    ![Add app](../assets/firestore/add-app.png)

4. You can copy the firebaseConfig and paste to them where you need them in your app.