---
layout: page
exclude: true
title: "Firebase and Firestore Setup"
excerpt: "How to set up Firebase"
permalink: guides/firebase
---

1. Go to the [Firebase console](https://console.firebase.google.com), login to Google and select Create a project
![Create Project](../assets/firestore/create_project.png)

2. Name your app
![Name app](../assets/firestore/name.png)

3. Enable Google Analytics (this is not necessary for now but you may this useful later).
![Google Analytics](../assets/firestore/ganalytics1.png)

4. Choose 'Default Account for Firebase' and select Create Project
![Google Analytics](../assets/firestore/ganalytics2.png)

5. In the console, select Cloud Firestore and then select Create database
![Firestore](../assets/firestore/firestore.png)

![Create Firestore](../assets/firestore/create_firestore.png)

6. Select Start in Test Mode, then press next
![Test Mode](../assets/firestore/test_mode.png)

7. Select europe-west2 (London) as the location of your database
![Location](../assets/firestore/location.png)

8. Return to console
![Console](../assets/firestore/console.png)

9. To get the credentials you need for web app, go to the cog and select Project Settings from the drop down. From this page, copy `firebaseConfig`.
![Project Settings](../assets/firestore/project_settings.png)