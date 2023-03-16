function gpsDistance(lat1, lon1, lat2, lon2) {
  // if you like gps maths look at http://www.movable-type.co.uk/scripts/latlong.html
  //Haversine formula

  const R = 6371; // Radius of the earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  lat1 = lat1 * (Math.PI / 180);
  lat2 = lat2 * (Math.PI / 180);

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;

  return d;
}

export function calculateDistance(data){
  let total_km = 0;

  for (let i = 0; i < data.length; i++) {

    if (i == (data.length - 1)) {
      break;
    }

    total_km += gpsDistance(data[i].coords.latitude, data[i].coords.longitude, data[i + 1].coords.latitude, data[i + 1].coords.longitude);
  }

  let total_km_rounded = total_km.toFixed(2);

  return([total_km_rounded]);
}