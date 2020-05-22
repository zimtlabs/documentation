
# Create asset
In the dashboard asset can be created using a form, or using a JSON input.

We will:
- Create an asset using asset form in the dashboard.
- Create 2 events on that asset.


## Create asset using the form
- In home page (Assets page) or by clicking `Assets` in left sidebar, click plus icon in top-right corner of the table (New asset).
- Follow images below on how to populate create asset form fields.
- Explanation:
    - Add name.
    - Add custom properties. Click + icon in properties title to add a new property.
        - Add properties:
            - Key: asset_type; Value: zimt.sku
            - Key: description; Value: ...
            - Key: Weight (grams); Value: 80
    - Add/upload a document. You can choose existing document you previously uploaded and/or upload a new one.
    - Add identifiers, one or more by clicking + icon in identifiers title.

### Create asset form
![Assets create form](/pages/tutorials/assets/images/create-asset-form-1.png)
![Assets create form](/pages/tutorials/assets/images/create-asset-form-2.png)


## Create 2 events using the form
- Select one or many assets in the asset table.
- Click icon in top-right corner of the table (Add event).
- Follow images below on how to populate create event form fields.
- Explanation:
    - Add type
    - Add name
    - Add custom properties. Click + icon in properties title to add a new property.
        - Add properties:
            - Key: _type; Value: public

### Create event form - Event 1
![Event create](/pages/tutorials/assets/images/create-event-form-1.png)

### Create event form - Event 2
![Event create](/pages/tutorials/assets/images/create-event-form-2.png)


## Create asset using JSON input
- In home page (Assets page) or by clicking `Assets` in left sidebar, click plus icon in top-right corner of the table (New asset).
- Select JSON tab.
- Follow images below on how to use create asset JSON input.
- Explanation:
    - Import, copy or enter asset JSON, which has to be array of events.
    - Clicking create asset, asset gets created and following that each JSON array object is used to create an event on previously created asset.

[Example JSON](https://github.com/zimtlabs/documentation/tree/master/public/pages/tutorials/assets/json/chocolate-zimt-sku.json)

### Create asset JSON input
![Asset create JSON](/pages/tutorials/assets/images/create-asset-json-1.png)