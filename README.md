## If you are using a web browser, and would prefer to view the website, please go to https://leasly-388c5.web.app/ . To have backend information load, please select the lock icon at the top of the address bar, select "Connection Secure" and then "Disable Protection for now". This will allow you to load in the backend via the browser, and will only affect your connection to this website. Currently working on a fix regarding SSL Certification.


## Frontend

### Understanding File-Structure
- The directories `frontend/android` and `frontend/ios` are prebuilt to support React Native.
- The main directory we care about is `frontend/app`, which holds the common code.
- Within the `app` folder, there are `components` and `pages`. Pages are made up of components, 
  and are rendered by our navigator.

### Downloading Dependencies
From the `frontend` folder, run:
```
npm install
```

### Starting Project
You can start the frontend from the corresponding folder by entering:
```
npm run web
```

