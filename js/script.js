$(function() {

    var zones = [
        {
            minLat: 20,
            maxLat: 60,
            minLong: 10,
            maxLong: 30,
            text: "text1"
        },
        {
            minLat: 20,
            maxLat: 60,
            minLong: 10,
            maxLong: 30,
            text: "text2"
        }
    ];

    function isInArea(position) {
        // test if coords are in area

        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        var text = false;

        $.each(zones, function(index, value) {
            if (lat > value.minLat && lat < value.maxLat &&
                long > value.minLong && long < value.maxLong) {
                text = value.text;
                return false;
            }
        });
        return text;
    }

    function positionCallback(position) {
        $('p#coords').html(position.coords.latitude + ' ' + position.coords.longitude);

        var text;
        if (text = isInArea(position)) {
            $('p#text').html(text);
        } else {
            $('p#text').html('keine zone');
        }
    }

    function handleError(error) {
        alert("Error!")
    }

    // Request repeated updates.
    var watchId = navigator.geolocation.watchPosition(positionCallback, handleError);
    //navigator.geolocation.getCurrentPosition(positionCallback, handleError);

});
