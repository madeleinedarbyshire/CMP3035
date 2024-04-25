---
layout: page
exclude: true
title: "Creating an .apk file"
permalink: guides/apk
hidden: true
---

## Create an .apk
For your assignment, you will need to generate an .apk file.

1. You need to install eas-cli
```
npm install –g eas-cli
```

2. Make sure you are logged in to expo cli.
``` 
npx expo login -u your-username -p your-password
```

3. Use eas-cli to build your app. If it asks you whether you would like to create a new keystore, select Yes.
```
eas build -p android --profile preview
```

4. It might ask you to sign in with git and create a git repository, if you would like to try building without git set the environment variable `EAS_NO_VCS` as follows:
```
$Env:EAS_NO_VCS=1
```

5. Download the apk from your expo profile. Make sure you test your apk file to see if it works! You have a limited number of builds so if it doesn't work follow the steps below and make sure you have resolved all the problems before retrying the build.

## Troubleshooting
Your app might run fine in expo but when you build it you might find that it doesn't run.

### Dependencies
1. Try running `npx expo install --fix` to fix any incompatible dependencies.

2. If that does work try running `npx expo doctor` and resolve any issues flagged.

### Google
1. Although maps works in development without a key, you need to include a key in your app.json for your built version to work.

2. You will also need to register your app with that key in the Google Cloud console. In your project, type `eas credentials` to get the Application identifier and SHA1. Go to the Google cloud console go to the key you created, under restrict android app click add and paste these into the pop up.

    ![Android Restrictions Package Name](../assets/gmaps/packagename.png)

### Other APIs
If you're apps are not working, or certain screen are not working. It could be that you need to take a similar approach for other APIs you are using and you need to check the API documentation. 


