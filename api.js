$(document).ready(function(){
     var lat;
     var long;
  
    $.getJSON("http://ip-api.com/json", function(data2){
      
    lat = data2.lat;
    long = data2.lon;
   
    
    var api = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=b61bde8d62bb66a356f041c8cb6fc9ac";
 
    
    
    
 
  $.getJSON(api, function(data){
     
    
    var fTemp;
    var kTemp;
    var cTemp;
    var tempSwap = true;
    
    var weatherType = data.weather[0].description;
    kTemp = data.main.temp;
    var windSpeed = data.wind.speed;
    var city = data.name;
    
    fTemp = ((kTemp)*(9/5)-459.67).toFixed(1);
    cTemp = (kTemp -273).toFixed(1);
    
 
    $("#city").html(city);
    $("#weatherType").html(weatherType);
      
//    $("#fTemp").html(fTemp);
//       if(fTemp > 40){
//          $("#boba").css("background-image", "url(http://gallsource.com/wp-content/uploads/2016/01/y12fwkd.jpg)")
//      }else{
//           $("#boba").css("background-image", "url(https://drscdn.500px.org/photo/101296309/m=2048/b89e1ed1be42b9988f1f339ea4314f7d)")
//      }
      
      
    switch (weatherType) {
        case 'clear sky':
             $('#boba').css('background','url(http://gallsource.com/wp-content/uploads/2016/01/y12fwkd.jpg');
            
    break;
        case 'mist':
             $('#boba').css('background','url(https://schoolsuppliesforafghanchildren.files.wordpress.com/2012/04/themist1.jpg');
    break;
        case 'broken clouds':
             $('#boba').css('background','url(http://www.rgfreer.com/wp-content/uploads/2009/05/broken-clouds.jpg');
    break;
        case 'light breez':
             $('#boba').css('background','url(http://www.hdlost.com/walls/light-breeze-wide.jpg');
    break;
        case 'snow':
             $('#boba').css('background','url(http://kingofwallpapers.com/snow/snow-006.jpg');
    break; 
        case 'light rain':
        $('#boba').css('background','url(https://wallpaperscraft.com/image/heavy_rain_rain_light_bushes_summer_60763_1920x1080.jpg');
    break; 
        case 'thunderstorm':
        $('#boba').css('background','url(http://farmersalmanac.com/wp-content/uploads/2015/06/Thunderstorm-5best.jpg');
    break; 
        case 'few clouds':
             $('#boba').css('background','url(https://i.ytimg.com/vi/8NTVWJRNvv0/maxresdefault.jpg');
    break;
        
    }
      
      
      
    $("#fTemp").click(function(){
      
      if(tempSwap === false){
        $("#fTemp").html(cTemp + " &#8451;");
        tempSwap = true;
      }else{
        $("#fTemp").html(fTemp + " &#8457;");
        tempSwap = false;
          $("#fTemp").css("background-color", "pink");
        }
        
     });
    
      
      
    windSpeed = ((2.237*windSpeed)).toFixed(1);
    $("#windSpeed").html(windSpeed + " mph");
    
   
});  
   
 
});
  
   
});
    
    
    

