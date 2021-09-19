
# Create asset with form

We will:
- Create an asset using asset form in the dashboard.
- Create 2 events on that asset.


## Create asset using the form
- In home page (Assets page) or by clicking `Assets` in left sidebar, click the plus icon in top-right corner of the table (New asset).
- Follow the images below on how to populate the fields in the form to create an asset.
- Explanation:
    - Add name.
    - Add custom properties. Click + icon in properties title to add a new property.
        - Add properties:
            - Key: type; Value: zimt.sku
            - Key: description; Value: ...
            - Any other properties...
    - Add/upload documents.
        - Add/upload a document. You can choose existing document you previously uploaded and/or upload a new one.
        - For the document to be visible by the Viewer, to make it so you have to add the property (click on properties + icon) `type` that starts with `zimt.`, as we added such a permission in previous step that allows Viewer app to only display documents of such data.
    - Add identifiers, one or more by clicking + icon in identifiers title.

### Create asset form
![Assets create form](/pages/tutorials/assets/images/create-asset-form.png)
