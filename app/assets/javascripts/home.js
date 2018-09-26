function initAutocomplete() {
    geocoder = new google.maps.Geocoder();
    autocomplete = new google.maps.places.Autocomplete(
        (document.getElementById('pac-input'))/*,
        {types: ['(cities)']}*/);
   
    autocomplete.addListener('place_changed', fillInAddress);
   }
   
   function codeAddress(address) {
      geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == 'OK') {
          alert(results[0].geometry.location);
          conosole.log(results[0].geometry.location.lat());
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
    }
   var place,latitude,longitude
    function fillInAddress() {
    place = autocomplete.getPlace();
    latitude = place.geometry.location.lat();
    longitude = place.geometry.location.lng();
    console.log(place.formatted_address);
    console.log(place.url);
    console.log(place.geometry.location);
    console.log(latitude);
    console.log(longitude);
    }
   


$(document).ready(function(){



    $('#search-btn').on('click',(function(){
        window.open("/restaurant?lat="+latitude+"&lng="+longitude,"_self")
    }))
});