<template>
  <div id="map"></div>
</template>

<script>
import { Map, TileLayer } from "maptalks";
import { getDevicePixelRatio } from "../utils/utils";
import * as components from "../components/";
import mapboxgl from "mapbox-gl";
import Vue from "vue";
export default {
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      mapboxgl.accessToken =
        "pk.eyJ1IjoiY2VuZXJneSIsImEiOiJjajBjYWdsYnMwNGM1MnFsY21xcTc2d3ZjIn0.nOvNpzuvlXEObCK7xcb5oQ";
      const map = new mapboxgl.Map({
        container: "map", // container id
        style: "mapbox://styles/mapbox/dark-v10", // stylesheet location
        center: [105.08052356963802, 36.04231948670001], // starting position [lng, lat]
        zoom: 9 // starting zoom
      });
      // const map = new Map(document.querySelector("#map"), {
      //   center: [105.08052356963802, 36.04231948670001],
      //   zoom: 5,
      //   minZoom: 1,
      //   maxZoom: 19,
      //   centerCross: true,
      //   baseLayer: new TileLayer("tile", {
      //     urlTemplate: `https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}${
      //       getDevicePixelRatio() > 1.5 ? "@2x" : ""
      //     }?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejh2N21nMzAxMmQzMnA5emRyN2lucW0ifQ.jSE-g2vsn48Ry928pqylcg`
      //   })
      //   // devicePixelRatio: 2
      // });

      const coordinates = map.getCenter().toArray();

      const html = this.component2html({
        component: components["image"],
        data: { hello: 456789 }
      });
      console.log(`Rd: html`, html);

      const popover = new mapboxgl.Marker({
        element: html,
        anchor: "bottom"
      })
        .setLngLat(coordinates)
        .addTo(map);
    },
    component2html(options) {
      const { component = "", data = "" } = options;
      if (!component) return;
      const Template = Vue.extend(component);
      const instance = new Template({
        data,
        el: document.createElement("div")
      });
      return instance.$el;
    }
  }
};
</script>

<style scoped>
#map {
  height: 100%;
  width: 100%;
}
</style>
