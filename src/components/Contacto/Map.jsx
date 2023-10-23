import React, { useEffect } from "react";
import  "./Maps.css"

function initMap() {
  const myLatLng = {
    lat: -30.75129508972168,
    lng: -59.58097839355469
  };
  const map = new window.google.maps.Map(document.getElementById("gmp-map"), {
    zoom: 14,
    center: myLatLng,
    fullscreenControl: false,
    zoomControl: true,
    streetViewControl: false
  });
  new window.google.maps.Marker({
    position: myLatLng,
    map,
    title: "My location"
  });
}

function Map() {
  useEffect(() => {
    // Verifica que la API de Google Maps ya se haya cargado
    if (window.google && window.google.maps) {
      initMap(); // Llama a la función initMap
    } else {
      console.error("La API de Google Maps no está disponible.");
    }
  }, []);

  return <div id="gmp-map" className="custom-map"></div>;
}

export default Map;
