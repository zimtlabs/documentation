
# Create permissions

As previously mentioned, we need to create permissions allowing some of our organization assets, events and documents to be publicly visible in the app using API key we previously created (in this case a viewer app).

### How to:
- Login to the [dashboard](https://dash.zi.mt).
- In left sidebar click on `Organization` > `Permissions` > Click lock icon in top-right corner of the table (New permission).
- To populate the fields follow the images below.
- Explanation:
    - Name and description: you describe what the permission is meant to do.
    - Actions: choose the appropriate action the permission refers to, ie. to allow the Viewer to `View specific assets` choose `Asset view` action.
    - Filters: from the dropdown you can choose which filter type the permission will use. In the first example below, by choosing Assets from the drop down menu and creating three filters `data.type: zimt.sku (or zimt.lot or zimt.item)` you allow the  Viewer to only view (get) assets whose `data.type: zimt.sku (or zimt.lot or zimt.item)`. To add multiple filters click the + button.
    - API key (an app with this API key), that this permission refers to. Viewer app is using specific API key to send requests, so in order to allow Viewer to view assets defined in this permission, we have to select Viewer's API key (API key we previously created for this app to use).
    - Very important note, since we have plans that stricly allow only specific API keys to make requests to hub, you will have to request from us (ZIMT company) to allow by plan you are using custom API key you created, in order for that API key to make requests to hub.

### Viewer app permission

![Viewer permission](/pages/tutorials/assets/images/permissions.png)
