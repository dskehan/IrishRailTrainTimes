var express = require('express');
const request = require('request');
var parseString = require('xml2js').parseString;
var app = express();

app.use(express.static(__dirname));

app.get('/trainData/:stationID', function (req, res) {
    var StationID = req.params.stationID
    if(StationID == null){ 
        StationID =  'ENFLD'
    }

    var data 
    url = 'http://api.irishrail.ie/realtime/realtime.asmx/getStationDataByCodeXML_WithNumMins?StationCode='+StationID+'&NumMins=90&format=xml'
    request(url, { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }     
        parseString(body, function (err, result) {
        // console.log(result.ArrayOfObjStationData.objStationData);
        data = result.ArrayOfObjStationData.objStationData

          sendData() 
         
       });
      });

    function sendData(){
        res.send(data)
    }
})

app.get('/trainData2/AllStations', function (req, res) {

var url = 'http://api.irishrail.ie/realtime/realtime.asmx/getAllStationsXML' 

request(url, { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }     
    parseString(body, function (err, result) {
    // console.log(result.ArrayOfObjStationData.objStationData);
    stationNameandID = {}
    data = result.ArrayOfObjStation.objStation
        for(x in data){
            stationNameandID[data[x].StationDesc] = data[x].StationCode
        }
      sendData(stationNameandID) 
   });
  });

function sendData(stationNameandID){
    res.send(stationNameandID)
}
})



  

app.listen('3000');
console.log('working on 3000');