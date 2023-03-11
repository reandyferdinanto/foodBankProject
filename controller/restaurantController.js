import axios from "axios";

const restaurant1 = (req, res) => {
  const lat = req.query.lat;
  const lng = req.query.lng;
  const radius = 1000; // meters
  const limit = 5;
  const degreeInMeters = 111319.9; // approximate distance in meters of 1 degree of latitude/longitude at the equator
  const delta = radius / degreeInMeters; // convert radius from meters to degrees
  const bbox = `${lng - delta},${lat - delta},${lng + delta},${lat + delta}`; // calculate bounding box

  const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&addressdetails=1&namedetails=1&extratags=1`;

  axios
    .get(url)
    .then((response) => {
      //   const address = response.data.address;
      const url_restaurants = `https://nominatim.openstreetmap.org/search.php?q=restaurant&format=json&bounded=1&viewbox=${bbox}&limit=${limit}`;
      return axios.get(url_restaurants);
    })
    .then((response) => {
      const restaurants = response.data.map((item) => {
        return {
          name: item.display_name,
          address: item.address,
          coordinates: {
            lat: item.lat,
            lng: item.lon,
          },
        };
      });
      res.json(restaurants);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send("Error getting restaurants");
    });
};

export { restaurant1 };
