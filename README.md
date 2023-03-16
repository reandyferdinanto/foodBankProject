<img src="./picture/nodedotjs.svg" alt="node.js" width="50" style="filter: hue-rotate(90deg);"/>

# foodBankProject

This code is designed to recommend the 5 nearest restaurants to a user based on their location. It does this by accessing a database of restaurant locations, calculating the distance between the user's location and each restaurant, sorting the restaurants by distance, and then returning the top 5. This code can be used to provide users with quick and easy dining recommendations based on their current location.

## HOW to INSTALL
## package 
``` 
$ npm express
$ npm axios
$ npm mongoose

$ npm nodemon
```
### or
```
$ npm install
```

## additional setup
* on package.json add "type" : "module", "start" : "nodemon app.js"

## HOW TO RUN THE CODE
```
$ npm start
```

### TEST ON POSTMAN
to get the 5 nearest rest use :
* method : GET
* http://localhost:3000/restaurants?lat=-6.235738&lng=106.811542
* change the params (lat & lng) as needed 
* lat = latitude & lng (longitude)

## any other example for the latitude & longitude of Restaurant in jakarta
* Namaaz Dining -6.235330, 106.834331
* Amuz Gourmet -6.218731, 106.819250
* Plataran Menteng -6.194231, 106.832872
* Akira Back -6.224609, 106.811861
* Lara Djonggrang -6.197232, 106.832425
