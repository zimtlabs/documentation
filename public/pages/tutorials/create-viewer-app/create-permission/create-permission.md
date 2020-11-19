
# Create permissions
As previously mentioned, we need to create permissions allowing some of our organization assets, events and documents to be publicly visible in the app using API key we previously created (in this case a viewer app).

### How to:
- Login to the [dashboard](https://dash.zi.mt).
- In left sidebar click on `Organization` > `Permissions` > Click lock icon in top-right corner of the table (New permission).
- Follow images below on how to populate create permission form fields.
- Explanation:
    - Name and description, you describe what permission is meant to do.
    - Actions, choose appropriate action permission refers to, ie. Permission allowing Viewer to `View specific assets` choose `Asset view` action.
    - Filters, from the dropdown you can choose filters permission will follow, ie. allowing Viewer to only view (get) assets where asset has any event of `object.data.asset_type: zimt.chocolate`, you would do as image below.
    - API key (an app with this API key), that this permission refers to. Viewer app is using specific API key to send requests, so in order to allow Viewer to view assets defined in this permission, we have to select Viewer's API key (API key we previously created for this app to use).

### Viewer app permission

![Viewer permission](/pages/tutorials/assets/images/permissions.png)
