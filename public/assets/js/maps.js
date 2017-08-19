( function($) {
  'use strict';
$(function(e) {	
var infoBox_ratingType = 'star-rating';
	/*--------- Listing-Locations --------------*/
    function mainMap() {
        var ib = new InfoBox();

        function locationData(locationURL, locationImg, locationTitle, locationAddress, locationRating, locationRatingCounter) {
            return ('' + '<a href="' + locationURL + '" class="listing-img-container">' + '<div class="infoBox-close"><i class="fa fa-times"></i></div>' + '<img src="' + locationImg + '" alt="">' + '<div class="listing-item-content">' + '<h3>' + locationTitle + '</h3>' + '<span>' + locationAddress + '</span>' + '</div>' + '</a>' + '<div class="listing-content">' + '<div class="listing-title">' + '<div class="' + infoBox_ratingType + '" data-rating="' + locationRating + '"><div class="rating-counter">(' + locationRatingCounter + ' reviews)</div></div>' + '</div>' + '</div>')
        }
        var locations = [
			/*-- Listing-1 ---*/
            [locationData('listing-detail-1.html', 'assets/images/600x450.jpg', "The Lumineers", '3112 NW Cache Rd, Lawton, OK 73505, USA', '3.5', '12'), 39.80167855121973, -105.07049560546875, 1, '<i class="im-icon"><img src="assets/images/category-icon5.png"></i>'],
			
			/*-- Listing-2 --*/
            [locationData('listing-detail-1.html', 'assets/images/600x450.jpg', 'Laisa Spa Center', '41 Sunset Blvd, Lawton, OK 73505, USA', '5.0', '23'), 39.70296052957233, -104.87274169921874, 2, '<i class="im-icon"><img src="assets/images/category-icon4.png"></i>'],
			
			/*-- Listing-3 --*/
            [locationData('listing-detail-1.html', 'assets/images/600x450.jpg', 'Blue Women Parlour', '778 Sunset Blvd, Lawton, OK 73505, USA', '2.0', '17'), 39.67231336658968, -105.09246826171875, 3, '<i class="im-icon"><img src="assets/images/category-icon4.png"></i>'],
			
			/*-- Listing-4 --*/
            [locationData('listing-detail-1.html', 'assets/images/600x450.jpg', 'Auto Repair Shop', '2726 Shinn Street, New York', '5.0', '31'), 39.9571224404468, -105.24765014648438, 4, '<i class="im-icon"><img src="assets/images/category-icon6.png"></i>'],
			
			/*-- Listing-5 --*/
            [locationData('listing-detail-1.html', 'assets/images/600x450.jpg', 'Eating Restaurant', '1512 Duncan Avenue, New York', '3.5', '46'), 39.64165260123416, -104.952392578125, 5, '<i class="im-icon"><img src="assets/images/category-icon2.png"></i>'],
			
			/*-- Listing-6 --*/
            [locationData('listing-detail-1.html', 'assets/images/600x450.jpg', 'The Shelby Apartment', '215 Terry Lane, New York', '4.5', '15'), 40.029717557833266, -105.281982421875, 6, '<i class="im-icon"><img src="assets/images/category-icon1.png"></i>'],
			
			/*-- Listing-7 --*/
            [locationData('listing-detail-1.html', 'assets/images/600x450.jpg', 'Fitness Center', '2726 Shinn Street, New York', '5.0', '31'), 39.72303232864369, -105.00732421875, 7, '<i class="im-icon"><img src="assets/images/category-icon3.png"></i>'],
        ];
        google.maps.event.addListener(ib, 'domready', function() {
            if (infoBox_ratingType = 'numerical-rating') {
                numericalRating('.infoBox .' + infoBox_ratingType + '');
            }
            if (infoBox_ratingType = 'star-rating') {
                starRating('.infoBox .' + infoBox_ratingType + '');
            }
        });
        var mapZoomAttr = $('#map').attr('data-map-zoom');
        var mapScrollAttr = $('#map').attr('data-map-scroll');
        if (typeof mapZoomAttr !== typeof undefined && mapZoomAttr !== false) {
            var zoomLevel = parseInt(mapZoomAttr);
        } else {
            var zoomLevel = 9;
        }
        if (typeof mapScrollAttr !== typeof undefined && mapScrollAttr !== false) {
            var scrollEnabled = parseInt(mapScrollAttr);
        } else {
            var scrollEnabled = false;
        }
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: zoomLevel,
            scrollwheel: scrollEnabled,
            center: new google.maps.LatLng(39.743098286948275, -104.98672485351562),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            panControl: false,
            navigationControl: false,
            streetViewControl: false,
            styles: [{
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#747474"
                }, {
                    "lightness": "23"
                }]
            }, {
                "featureType": "poi.attraction",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#f38eb0"
                }]
            }, {
                "featureType": "poi.government",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ced7db"
                }]
            }, {
                "featureType": "poi.medical",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffa5a8"
                }]
            }, {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#c7e5c8"
                }]
            }, {
                "featureType": "poi.place_of_worship",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#d6cbc7"
                }]
            }, {
                "featureType": "poi.school",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#c4c9e8"
                }]
            }, {
                "featureType": "poi.sports_complex",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#b1eaf1"
                }]
            }, {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "lightness": "100"
                }]
            }, {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }, {
                    "lightness": "100"
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffd4a5"
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffe9d2"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "all",
                "stylers": [{
                    "visibility": "simplified"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [{
                    "weight": "3.00"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "weight": "0.30"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "labels.text",
                "stylers": [{
                    "visibility": "on"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#747474"
                }, {
                    "lightness": "36"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#e9e5dc"
                }, {
                    "lightness": "30"
                }]
            }, {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "lightness": "100"
                }]
            }, {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{
                    "color": "#d2e7f7"
                }]
            }]
        });
		/*--------- Listing-Info-Box --------------*/
        $('.listing-item-container').on('mouseover', function() {
            var listingAttr = $(this).data('marker-id');
            if (listingAttr !== undefined) {
                var listing_id = $(this).data('marker-id') - 1;
                var marker_div = allMarkers[listing_id].div;
                $(marker_div).addClass('clicked');
                $(this).on('mouseout', function() {
                    if ($(marker_div).is(":not(.infoBox-opened)")) {
                        $(marker_div).removeClass('clicked');
                    }
                });
            }
        });
        var boxText = document.createElement("div");
        boxText.className = 'map-box'
        var currentInfobox;
        var boxOptions = {
            content: boxText,
            disableAutoPan: false,
            alignBottom: true,
            maxWidth: 0,
            pixelOffset: new google.maps.Size(-134, -55),
            zIndex: null,
            boxStyle: {
                width: "270px"
            },
            closeBoxMargin: "0",
            closeBoxURL: "",
            infoBoxClearance: new google.maps.Size(25, 25),
            isHidden: false,
            pane: "floatPane",
            enableEventPropagation: false,
        };
        var markerCluster, overlay, i;
        var allMarkers = [];
        var clusterStyles = [{
            textColor: 'white',
            url: '',
            height: 50,
            width: 50
        }];
        var markerIco;
        for (i = 0; i < locations.length; i++) {
            markerIco = locations[i][4];
            var overlaypositions = new google.maps.LatLng(locations[i][1], locations[i][2]),
                overlay = new CustomMarker(overlaypositions, map, {
                    marker_id: i
                }, markerIco);
            allMarkers.push(overlay);
            google.maps.event.addDomListener(overlay, 'click', (function(overlay, i) {
                return function() {
                    ib.setOptions(boxOptions);
                    boxText.innerHTML = locations[i][0];
                    ib.open(map, overlay);
                    currentInfobox = locations[i][3];
                    google.maps.event.addListener(ib, 'domready', function() {
                        $('.infoBox-close').on('click', function(e) {
                            e.preventDefault();
                            ib.close();
                            $('.map-marker-container').removeClass('clicked infoBox-opened');
                        });
                    });
                }
            })(overlay, i));
        }
        var options = {
            imagePath: 'images/',
            styles: clusterStyles,
            minClusterSize: 2
        };
        markerCluster = new MarkerClusterer(map, allMarkers, options);
        google.maps.event.addDomListener(window, "resize", function() {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        });
        var zoomControlDiv = document.createElement('div');
        var zoomControl = new ZoomControl(zoomControlDiv, map);

        function ZoomControl(controlDiv, map) {
            zoomControlDiv.index = 1;
            map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(zoomControlDiv);
            controlDiv.style.padding = '5px';
            controlDiv.className = "zoomControlWrapper";
            var controlWrapper = document.createElement('div');
            controlDiv.appendChild(controlWrapper);
            var zoomInButton = document.createElement('div');
            zoomInButton.className = "custom-zoom-in";
            controlWrapper.appendChild(zoomInButton);
            var zoomOutButton = document.createElement('div');
            zoomOutButton.className = "custom-zoom-out";
            controlWrapper.appendChild(zoomOutButton);
            google.maps.event.addDomListener(zoomInButton, 'click', function() {
                map.setZoom(map.getZoom() + 1);
            });
            google.maps.event.addDomListener(zoomOutButton, 'click', function() {
                map.setZoom(map.getZoom() - 1);
            });
        }
        var scrollEnabling = $('#scrollEnabling');
        $(scrollEnabling).on('click', function(e)  {
            e.preventDefault();
            $(this).toggleClass("enabled");
            if ($(this).is(".enabled")) {
                map.setOptions({
                    'scrollwheel': true
                });
            } else {
                map.setOptions({
                    'scrollwheel': false
                });
            }
        })
        $("#geoLocation, .input-with-icon.location a").on('click', function(e)  {
            e.preventDefault();
            geolocate();
        });

        function geolocate() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    map.setCenter(pos);
                    map.setZoom(12);
                });
            }
        }
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            map.setOptions({
                draggable: false
            });
        }
    }
    var map = document.getElementById('map');
    if (typeof(map) != 'undefined' && map != null) {
        google.maps.event.addDomListener(window, 'load', mainMap);
        google.maps.event.addDomListener(window, 'resize', mainMap);
    }

    function singleListingMap() {
        var myLatlng = new google.maps.LatLng({
            lng: $('#singleListingMap').data('longitude'),
            lat: $('#singleListingMap').data('latitude'),
        });
        var single_map = new google.maps.Map(document.getElementById('singleListingMap'), {
            zoom: 15,
            center: myLatlng,
            scrollwheel: false,
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            panControl: false,
            navigationControl: false,
            streetViewControl: false,
            styles: [{
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#747474"
                }, {
                    "lightness": "23"
                }]
            }, {
                "featureType": "poi.attraction",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#f38eb0"
                }]
            }, {
                "featureType": "poi.government",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ced7db"
                }]
            }, {
                "featureType": "poi.medical",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffa5a8"
                }]
            }, {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#c7e5c8"
                }]
            }, {
                "featureType": "poi.place_of_worship",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#d6cbc7"
                }]
            }, {
                "featureType": "poi.school",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#c4c9e8"
                }]
            }, {
                "featureType": "poi.sports_complex",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#b1eaf1"
                }]
            }, {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "lightness": "100"
                }]
            }, {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }, {
                    "lightness": "100"
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffd4a5"
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffe9d2"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "all",
                "stylers": [{
                    "visibility": "simplified"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [{
                    "weight": "3.00"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "weight": "0.30"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "labels.text",
                "stylers": [{
                    "visibility": "on"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#747474"
                }, {
                    "lightness": "36"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#e9e5dc"
                }, {
                    "lightness": "30"
                }]
            }, {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "lightness": "100"
                }]
            }, {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{
                    "color": "#d2e7f7"
                }]
            }]
        });
		
		/*--------- Listing-Street-Views-Button --------------*/
		
        $('#streetView').on('click', function(e) {
            e.preventDefault();
            single_map.getStreetView().setOptions({
                visible: true,
                position: myLatlng
            });
        });
        var zoomControlDiv = document.createElement('div');
        var zoomControl = new ZoomControl(zoomControlDiv, single_map);

        function ZoomControl(controlDiv, single_map) {
            zoomControlDiv.index = 1;
            single_map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(zoomControlDiv);
            controlDiv.style.padding = '5px';
            var controlWrapper = document.createElement('div');
            controlDiv.appendChild(controlWrapper);
            var zoomInButton = document.createElement('div');
            zoomInButton.className = "custom-zoom-in";
            controlWrapper.appendChild(zoomInButton);
            var zoomOutButton = document.createElement('div');
            zoomOutButton.className = "custom-zoom-out";
            controlWrapper.appendChild(zoomOutButton);
            google.maps.event.addDomListener(zoomInButton, 'click', function() {
                single_map.setZoom(single_map.getZoom() + 1);
            });
            google.maps.event.addDomListener(zoomOutButton, 'click', function() {
                single_map.setZoom(single_map.getZoom() - 1);
            });
        }
        var singleMapIco = "<i class='im-icon'><img src='" + $('#singleListingMap').data('map-icon') + "'></i>";
        new CustomMarker(myLatlng, single_map, {
            marker_id: '1'
        }, singleMapIco);
    }
    var single_map = document.getElementById('singleListingMap');
    if (typeof(single_map) != 'undefined' && single_map != null) {
        google.maps.event.addDomListener(window, 'load', singleListingMap);
        google.maps.event.addDomListener(window, 'resize', singleListingMap);
    }

    function CustomMarker(latlng, map, args, markerIco) {
        this.latlng = latlng;
        this.args = args;
        this.markerIco = markerIco;
        this.setMap(map);
    }
    CustomMarker.prototype = new google.maps.OverlayView();
    CustomMarker.prototype.draw = function() {
        var self = this;
        var div = this.div;
        if (!div) {
            div = this.div = document.createElement('div');
            div.className = 'map-marker-container';
            div.innerHTML = '<div class="marker-container">' + '<div class="marker-card">' + '<div class="front face">' + self.markerIco + '</div>' + self.markerIco + '</div>'  + '</div>' + '</div>'
            google.maps.event.addDomListener(div, "click", function(event) {
                $('.map-marker-container').removeClass('clicked infoBox-opened');
                google.maps.event.trigger(self, "click");
                $(this).addClass('clicked infoBox-opened');
            });
            if (typeof(self.args.marker_id) !== 'undefined') {
                div.dataset.marker_id = self.args.marker_id;
            }
            var panes = this.getPanes();
            panes.overlayImage.appendChild(div);
        }
        var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
        if (point) {
            div.style.left = (point.x) + 'px';
            div.style.top = (point.y) + 'px';
        }
    };
    CustomMarker.prototype.remove = function() {
        if (this.div) {
            this.div.parentNode.removeChild(this.div);
            this.div = null;
            $(this).removeClass('clicked');
        }
    };
    CustomMarker.prototype.getPosition = function() {
        return this.latlng;
    };
	
function numericalRating(ratingElem) {
    $(ratingElem).each(function() {
        var dataRating = $(this).attr('data-rating');
        if (dataRating >= 4.0) {
            $(this).addClass('high');
        } else if (dataRating >= 3.0) {
            $(this).addClass('mid');
        } else if (dataRating < 3.0) {
            $(this).addClass('low');
        }
    });
}
function starRating(ratingElem) {

    $(ratingElem).each(function() {
        var dataRating = $(this).attr('data-rating');
        if (dataRating >= 4.0) {
            $(this).addClass('high');
        } else if (dataRating >= 3.0) {
            $(this).addClass('mid');
        } else if (dataRating < 3.0) {
            $(this).addClass('low');
        }
    });
	
	
	}

	

});	
})(this.jQuery);
