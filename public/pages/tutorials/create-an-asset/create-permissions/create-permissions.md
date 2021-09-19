
# Create permissions

As previously mentioned, we need to create permissions allowing some of our organization assets, events and documents to be publicly visible in ZIMT Viewer app.

We will create 1 permission:
- Allowing Viewer to get all assets of `data.type: zimt.sku or zimt.lot or zimt.item`
- Allowing Viewer to get all events whose `object.data.type` starts with `zimt.`
- Allowing Viewer to get all documents whose `object.data.properties.type` starts with `zimt.`

### How to:
- Login to the [dashboard](https://dash.zi.mt).
- In left sidebar click on `Organization` > `Permissions` > Click lock icon in top-right corner of the table (New permission).
- To populate the fields follow the images below.
- Explanation:
    - Name and description: you describe what the permission is meant to do.
    - Actions: choose the appropriate action the permission refers to, ie. to allow the Viewer to `View specific assets` choose `Asset view` action.
    - Filters: from the dropdown you can choose which filter type the permission will use. In the first example below, by choosing Assets from the drop down menu and creating three filters `data.type: zimt.sku (or zimt.lot or zimt.item)` you allow the  Viewer to only view (get) assets whose `data.type: zimt.sku (or zimt.lot or zimt.item)`. To add multiple filters click the + button.
    - To associate a permission with any app different from the dashboard, we have to select the API key of the app of interest. In this permission we select the API key of the viewer (a.k.a. ZIMT Engage). Start typing “Viewer” in the box visualize the possible options. ZIMT Viewer app is using specific API key to send requests, so in order to allow Viewer to view assets defined in this permission, we have to select Viewer's API key.

### Asset, event and document permission

![permission](/pages/tutorials/assets/images/permissions.png)
