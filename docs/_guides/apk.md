---
layout: page
exclude: true
title: "Creating an .apk file"
permalink: guides/apk
hidden: true
---

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

3. Download the apk from your expo profile. Make sure you test your apk file to see if it works!


