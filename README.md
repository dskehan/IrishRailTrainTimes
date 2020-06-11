# IrishRailTrainTimes
This is a Node JS Application, to run:

navigate to this folder in cmd or powershell for windows or terminal for mac and linux and then issue the following commands: 

npm install

npm start 

then navigate to localhost:3000 on your browser and select the trian station you wish to view, I found Bray or Cork to always be busy and have data! 

if there is any problems, please let me know. 

The application will run the HTML page on the index, a request to server.js is made when the user selects a train station, 
Once the server.js request is made the XML data will be requested from the API in server.js, the data will be parsed and returned to the HTML page
The HTML page then displays it on a styled table. 

I choose to only display what i felt was the most relevant information, however, the other information can easily be added to the arrays found in the JavaScript. 
