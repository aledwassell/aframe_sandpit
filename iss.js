$('document').ready(function(){
  var lat, lon;
  console.log('test');

  // var url = 'http://api.open-notify.org/iss-now.json';
  var url = 'https://api.wheretheiss.at/v1/satellites/25544';

  setInterval(askIss, 1500);

  function askIss(){
    $.ajax({
      url: url,
      success: function(data) {
        gotData(data);
      }
    });
  }

  function gotData(data){
  	lat = Math.floor(data.latitude * 10);
  	lon = Math.floor(data.longitude * 10);
    $('#iss').attr('rotation', lat + ' ' + lon + '0');
    console.log('latitude:' + lat + ' longitude:' + lon);

  }
});
