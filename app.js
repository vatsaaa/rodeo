function initMap() {
    const options = {
        center: {lat: 28.3808, lng:77.1328},
        zoom: 12
    }

    let map = new google.maps.Map(document.getElementById("map"), options)

    // Marker
/*
    const marker = new google.maps.Marker({
        position:{lat:37.7, lng: 0.5},
        map: map
    })

    // InfoWindow
    const detailWindow = new google.maps.InfoWindow({
        content: `<h3>Whatever</h3>`
    })

    marker.addListener("mouseover", () => {
        detailWindow.open(map, marker);
    })
*/
    // Add Marker

    function addMarker(location) {
        const marker = new google.maps.Marker({
            position:location,
            map: map,
            icon: "https://img.icons8.com/nolan/2x/marker.png"
        })
    }

    let locationArray = [{lat: 28.3808, lng: 77.1328}, {lat: 28.3808, lng: 77.1328}, {lat: 28.3808, lng: 77.1328}, {lat: 28.3808, lng: 77.1328}]

    addMarker({lat: 28.3808, lng: 77.1328});
}