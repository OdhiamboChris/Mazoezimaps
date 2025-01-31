import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapboxExample = () => {
  const mapContainerRef = useRef();
  const mapRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoib3Rpc2t5IiwiYSI6ImNrc2l1NnV5djB2eGcyb21icWxrNW8zcXoifQ.LPG7MaK49RzqeL6xhS4a2A";

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/otisky/cm6kqlob700m901qx5o5x1mxo/draft",
      center: [41, 21],
      zoom: 3,
    });

    return () => {
      mapRef.current.remove();
    };
  }, []);

  return <div id="map" ref={mapContainerRef} style={{ height: "100%" }}></div>;
};

export default MapboxExample;
