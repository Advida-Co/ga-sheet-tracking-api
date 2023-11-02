# Google Ads / Google Sheet Auto Upload Conversion Tracking

....................................................

# Step 1: Creat Google Ads Conversion

1. Log in to Google Ads
2. Select Tools & Settings, navigate to Conversions
3. Create New Conversion
3. Select 'Import' as type of Conversion
4. Select 'Manual import using API or uploads'
5. Select 'Track conversions from clicks'
6. Goal can be either Qualified Lead or Converted Lead
7. Enter Conversion name, this will be the same name you place in the target file.
8. Select Conversion value.
9. Set count to Every.
10. Select Create.

# Step 2: Set Up Google Sheet

1. Make a copy of this page: https://docs.google.com/spreadsheets/d/1LYe6qOCL9sSLiHG16YLKJi2fmrCt-WroNJ5evOZfy14
2. Note the ID at the end is what you will paste in the target file.
3. When the API is called it will automatically pus to this sheet.

# Step 3: Configure The API Routes

In the /app/api directory you will find a folder named 'example' with a route.tsx - this is the path to your api route so for example the postback URL would be "https://my-url.com/api/example". 

To clone this route simply copy and paste the 'example' folder and rename to whatever you want. This is is how you can create multiple API routes targeting different Google Sheets. 

Then all you have to do is change the file information replacing:

1. Google Sheet ID
2. Google Ads Conversion Name

Now you can place this in your tracking system and as long as you are passing through the google click id it will pass through the Google Sheet.

Example Postback URL in tracking system: https://my-url.com/api/example?click_id={gclid}&payout={payout_amount}


# Step 4: Uploading Google Sheet

Now that you have your API configured and you will need to set up auto-uploads on your Google Ads Account.

1. In Google Ads navigate back to Conversions.
2. On the Left hand side Select 'Uploads'.
3. From the Uploads Tab, toggle over to 'Schedules'.
4. Select source - Google Sheets, then Select the Scheduled Sheet.
5. Set the Hour you want the auto upload to occur.
6. Repeate process to have multiple hours scheduled for upload.
