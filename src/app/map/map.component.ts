import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    const mapOptions = {
      center: new google.maps.LatLng(22.5726, 88.3639),
      zoom: 13
    };

    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    const marker = new google.maps.Marker({
      position: new google.maps.LatLng(22.5726, 88.3639),
      map: map
      // title: 'A sample marker on the map!'
    });
  }

  searchLocation(location: string): void {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: location }, (results: any, status: any) => {
      if (status === google.maps.GeocoderStatus.OK) {
        const latitude = results[0].geometry.location.lat();
        const longitude = results[0].geometry.location.lng();

        const map = new google.maps.Map(document.getElementById('map'), {
          center: { lat: latitude, lng: longitude },
          zoom: 13
        });

        const marker = new google.maps.Marker({
          position: { lat: latitude, lng: longitude },
          map: map,
          title: results[0].formatted_address
        });
      } else {
        alert('Location not found!');
      }
    });
  }
}
