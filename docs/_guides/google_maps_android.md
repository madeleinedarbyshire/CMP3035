---
layout: page
exclude: true
title: "Google Maps Android API"
permalink: guides/gmapsandroid
---

1. Select Maps SDK for Android

2. Press Enable and accept terms and conditions.
    ![TCs](../assets/gmaps/tcs.png)

    **The next screen will ask for your card details. You DO NOT need to do this.** They have made it difficult to navigate back to the dashboard from this page without entering your card details so follow this link back to [your dashboard](https://console.cloud.google.com/home/dashboard).
    ![Stop Payment](../assets/gmaps/stoppay.png)

3. From the dashboard, go to side menu and under APIs & Services go to credentials. At the top of the page select +Create Credentials then API Key.
    ![Credentials](../assets/gmaps/creds1.png)
    ![Credentials](../assets/gmaps/creds2.png)

4. Go to the three dots on the key you've created and select Edit Key to configure restrictions. 
    ![Edit Key](../assets/gmaps/editkey.png)

5. Under set an application restriction, select Android apps. Under API restrictions, select Restrict key. At the drop-down that says Select APIs select Maps SDK for Android, select OK and press Save.
    ![Android Restrictions](../assets/gmaps/androidres.png)

6. (OPTIONAL: *you need to have a bunch of config that comes with android studio to make this work, if you are not on a lab machine and don't have this installed on your machine, don't worry about it for today*) Under Android restrictions, press add. 

    6.1 Add your unique package name (something like "com.uol.exercise")
    6.2 Generate a key with the follow command
    ```
    keytool -list -v -keystore "%USERPROFILE%\.android\debug.keystore" -alias androiddebugkey -storepass android -keypass android
    ```
    6.3 Copy the result into the fingerprint.

    *Caveat 1: if you're not using lab machines, you might need to install Android studio to get all the configuration you need to run this. If you can't get this to work on your machine, don't worry about it for today.*
    *Caveat 2: if you're using a lab machine, remember the fingerprint is unique to the Computing user so you'll need to change the restriction for it to work on other machines*

    ![Android Restrictions Package Name](../assets/gmaps/packagename.png)

    ![Android Restrictions Keystore](../assets/gmaps/keystore.png)

7. Copy your API key and paste it into your app.json with your bundle ID.

    ```javascript
    "android": {
        "package": "com.uol.exercise",
        "config": {"googleMaps": {"apiKey": "AIzaSyBpwg_YOUR_API_KEY_boQ8NJBiVEcAUs" }}
    }
    ```
