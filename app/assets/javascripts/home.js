//To get user current location

   // window.onload =function(){


   //     let locationInput = document.getElementById('pac-input');
   //     let myLocation = document.getElementsByName('mylocation')[0];
      
      
      
   //     function getLocation(){
   //        if (navigator.geolocation){
   //            navigator.geolocation.getCurrentPosition(showPosition);
   //        }else{
   //            locationInput.value = "Geolocation is not supported by this browser."
   //        }
   //     }
      
   //     function showPosition(position){
   //        let lat = position.coords.latitude
   //        let long = position.coords.longitude
   //        console.log(lat, long);
   //     }
      
   //     myLocation.addEventListener('change',function(){
   //        if(locationInput.value == "current location"){
   //            getLocation();
   //        }
   //     })
      
      
   //     }
      
  

  
  
   //start of google autocomplete places API
  
  
  
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



//     window.onload =function(){
//     var ac = new google.maps.places.Autocomplete(document.getElementById('rest-input'));
  
//     google.maps.event.addListener(ac,'place_changed',function(){
         
//         var place = ac.getPlace();
//         console.log(place.formatted_address);
//         console.log(place.url);
//         console.log(place.geometry.location);
//         latitude = place.geometry.location.lat();
//         longitude = place.geometry.location.lng();
//         console.log(latitude);
//         console.log(longitude);
//     });
// }



//start of zomato api
$(document).ready(function(){


$("#search-btn").click(function(e){

console.log('hi');
$.ajax({
   method: "GET",
   crossDomain: true,
   url: "https://developers.zomato.com/api/v2.1/geocode?lat="+latitude+"&lon="+longitude+"",
   dataType: "json",
   async: true,
   headers: {
     "user-key": "1047f1675c62331cf8bf6eeb97cf483b"
   },
   success: function(data) {
      restaurants = data.nearby_restaurants
       console.log(data)
       console.log(".................................")
       console.log(restaurants)
       console.log(".................................")
       
       console.log(restaurants[0].restaurant.name);
        restaurants.forEach(function(rest){
          let result = rest.restaurant
          console.log(result.name)
          console.log(result.location.address)
          console.log(result.average_cost_for_two)
          console.log(result.currency)

        if(result.featured_image !== ""){

          document.getElementById('display-rest').insertAdjacentHTML('afterbegin','<div class="column"><div class="ui fluid card"><div class="content"><span class="right floated"><i class="heart outline like icon"></i></span></div><div class="image"><img class="rest-pics" src ='+'"'+result.featured_image+'"'+'></div><div class="content"><div class="meta"><span class="date">'+result.cuisines+'</span></div><a class="header">'+result.name+'</a><div class="address">'+result.location.address+'</div></div></div></div>')
        }
          // document.getElementById('display-rest').insertAdjacentHTML('afterbegin','<div><h5>'+ result.cuisines +'</h5><div>'+result.name+'</div><div>'+result.location.address+'</div></div>');
        })
    
   //   var pubs = [];
   //   pubs = data.restaurants;
   //   for (var j = 0; j < pubs.length; j++) {
   //     (function(val) {
   //       infoContent = "<div class='name'>" + "Pub: " + pubs[j].restaurant.name + "</div>" + "\n" + "<div class='cuisines'>" + pubs[j].restaurant.cuisines + "</div>";
   //     })(j);
   //   }
   },
   error: function() {
     infoContent = "<div>Sorry, data is not coming through. Refresh and try again.</div>";
   }
 }); //end of $.ajax call
});
})

$(document).ready(function(){
   $('.clearable .ui.selection.dropdown')
   .dropdown({
     clearable: true
   })
 ;
});






// function initAutocomplete() {
//   geocoder = new google.maps.Geocoder();
//   autocomplete = new google.maps.places.Autocomplete(
//       (document.getElementById('pac-input'))/*,
//       {types: ['(cities)']}*/);

//   autocomplete.addListener('place_changed', fillInAddress);
//  }

//  function codeAddress(address) {
//     geocoder.geocode( { 'address': address}, function(results, status) {
//       if (status == 'OK') {
//         alert(results[0].geometry.location);
//         conosole.log(results[0].geometry.location.lat());
//       } else {
//         alert('Geocode was not successful for the following reason: ' + status);
//       }
//     });
//   }
//  var place,latitude,longitude
//   function fillInAddress() {
//   place = autocomplete.getPlace();
//   latitude = place.geometry.location.lat();
//   longitude = place.geometry.location.lng();
//   console.log(place.formatted_address);
//   console.log(place.url);
//   console.log(place.geometry.location);
//   console.log(latitude);
//   console.log(longitude);
//  }




// window.onload = function(){

// let search = document.getElementById('search-btn');

// search.addEventListener('click',function(e){
  

//  var request = {
//   location: new google.maps.LatLng(latitude,longitude),
//   radius: '500',
//   types: ['restaurant'],
//   fields: ['photos', 'formatted_address', 'name', 'rating', 'opening_hours', 'geometry']
// };
// var container = document.getElementById('results');

// var service = new google.maps.places.PlacesService(container);
// service.nearbySearch(request, callback);


// function callback(results, status) {

//   if (status == google.maps.places.PlacesServiceStatus.OK) {
   
//       for (var i = 0; i < results.length; i++) {

        
//           let result = results[i];
//           console.log(result);
          
//           if( result.photos !== undefined){
//           let pic = result.photos[0].getUrl({'maxWidth': 500, 'maxHeight': 500});
//           let display = document.getElementById('display-rest');

//           display.insertAdjacentHTML('afterbegin','<div class="column"><div class="ui fluid card"><div class="content"><span class="right floated"><i class="heart outline like icon"></i></span></div><div class="image"><img class="rest-pics" src ='+'"'+pic+'"'+'></div><div class="content"><div class="meta"><span class="date">'+result.rating+'</span></div><a>'+result.name+'</a><div class="address">'+result.vicinity+'</div></div>')
//           }
//         }
//   }
// }



// })
// }
