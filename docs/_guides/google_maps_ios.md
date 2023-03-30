---
layout: page
exclude: true
title: "Google Maps iOS API"
permalink: guides/gmapsios
---

1. Select Maps SDK for iOS from the api library. It should be near the top.

![APIs](../assets/gmaps/library.png)

2. Press Enable and accept terms and conditions.

![TCs](../assets/gmaps/tcs.png)

*The next screen will ask for your card details. You DO NOT need to do this.* They have made it difficult to navigate back to the dashboard from this page without entering your card details so follow this link back to [your dashboard](https://console.cloud.google.com/home/dashboard).

![Stop Payment](../assets/gmaps/stoppay.png)

3. From the dashboard, go to side menu and under APIs & Services go to credentials. At the top of the page select +Create Credentials then API Key.

![Credentials](../assets/gmaps/creds1.png)

![Credentials](../assets/gmaps/creds2.png)

4. Go to the three dots on the key you've created and select Edit Key to configure restrictions. 

![Edit Key](../assets/gmaps/editkey.png)

5. Under set an application restriction, select iOS apps. Under API restrictions, select Restrict key. Under iOS restrictions, add the a bundle ID, something memorable but unique like com.uol.exercise.

![iOS Restrictions](../assets/gmaps/iosres.png)

6. At the drop-down that says Select APIs select Maps SDK for iOS, select OK and press Save.

![iOS Restrictions](../assets/gmaps/iosres2.png)

5. Copy your API key and paste it into your app json with your bundle ID.
```javascript
"ios": {
    "supportsTablet": true,
    "bundleIdentifier": "com.uol.exercise",
    "config": {
        "googleMapsApiKey": "AIzaSyBpwg_YOUR_API_KEY_boQ8NJBiVEcAUs"
        }
    }
```