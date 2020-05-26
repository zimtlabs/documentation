
# Display in Viewer
Finally, we can view our asset and its events in our Viewer app.

## Recap
1. We created a new API key for our viewer to use, in order for our viewer app to be able to send requests to ZIMT Hub API.
2. We created permissions to allow viewer to get/display our specific organization assets, events and documents.

## Create an asset
Now we need to create an asset described in permission we previously created, so we can display it in the viewer app. \
You can follow this [Create asset tutorial](https://dev.zi.mt/tutorials/create-an-asset/getting-started).

## Viewer app
- You can download our very simple HTML, CSS, JS [viewer app](https://github.com/zimtlabs/zimt-view).
- Add the API key you created in previous steps to `assets/js/config.js`.
- App is now ready to go.

## Displaying asset and events in viewer
- Open index.html in your browser.
- In the search input enter ID of an asset you want to view.
- If Viewer has permission to view requested asset, it will display the asset information, otherwise display an error.
- In the page image, verification status, title, description, properties and events are displayed.
- You can open the browser console to view asset blockchain verification result.

App is using [ZIMT JavaScript SDK](https://www.npmjs.com/package/@zimt/sdk) for fetching ZIMT Hub API assets and events. \
All the source code is in `assets/js/main.js` and `index.html`.

### Asset
![Viewer asset](/pages/tutorials/assets/images/create-viewer-viewer.png)