<template>
  <div id="map"></div>
</template>

<script>
import { Map, TileLayer } from "maptalks";
import { getDevicePixelRatio } from "../utils/utils";
import { showPopover } from "../Component/Popup";
export default {
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const map = new Map(document.querySelector("#map"), {
        center: [105.08052356963802, 36.04231948670001],
        zoom: 5,
        minZoom: 1,
        maxZoom: 19,
        centerCross: true,
        baseLayer: new TileLayer("tile", {
          urlTemplate: `https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}${
            getDevicePixelRatio() > 1.5 ? "@2x" : ""
          }?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejh2N21nMzAxMmQzMnA5emRyN2lucW0ifQ.jSE-g2vsn48Ry928pqylcg`
        })
        // devicePixelRatio: 2
      });
      console.log(`Rd: initMap -> map`, map);

      const coordinates = map
        .getCenter()
        .toFixed(3)
        .toArray();

      showPopover("image", map, {
        coordinates,
        width: 450,
        // height: 400,
        autoCenter: false
      });
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
