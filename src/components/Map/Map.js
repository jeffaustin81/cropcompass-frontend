import L from 'leaflet';
import Counties from './countiesGeoJSON.js';
import { default as React, PropTypes } from 'react';

class Map extends React.Component {
  constructor () {
    super();
    this.setupFeature = this.setupFeature.bind(this);
    this.resetLayer = this.resetLayer.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.focusOnMap = this.focusOnMap.bind(this);
    this.highlightLayer = this.highlightLayer.bind(this);
    this.getColor = this.getColor.bind(this);
  }
  componentDidMount () {
    let map = L.map('map', { zoomControl: false }).setView([44.121, -120.587], this.props.zoomLevel);

    map.dragging.disable();
    map.touchZoom.disable();
    map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();
/*
    var legend = L.control({position: 'bottomright'});

    legend.onAdd = (map) => {
      let div = L.DomUtil.create('div', 'info legend');
      div.innerHtml = '<u>Sufficient Households</u><br/>';
      div.innerHtml += '<i class="under"></i>less than half<br/>';
      div.innerHtml += '<i class="sufficient"></i>more than half<br/>';
      div.innerHtml += '<i class="over"></i>almost all<br/>';
      div.innerHTML = div.innerHtml;

      return div;
    };

    legend.addTo(map);
*/
    let geoLayer = L.geoJson(Counties, {
      style: this.styleLayer.bind(this),
      onEachFeature: this.setupFeature.bind(this)
    });
    geoLayer.addTo(map);
    this.geoLayer = geoLayer;
    this.map = map;
    this.forceUpdate();
  }

  setupFeature (feature, layer) {
    layer.on({
      mouseover: this.highlightLayer,
      mouseout: this.resetLayer,
      click: this.handleClick
    });
  }

  styleLayer (layer) {
    let objHappy = {
      stroke: true,
      weight: 2,
      opacity: 1,
      color: '#6F5204',
      dashArray: '3',
      fillColor: this.getColor(layer),
      fill: true,
      fillOpacity: 0.7
    };
    return objHappy;
  }

  getColor (layer) {
    layer = layer.feature || layer;
    if (!this.colorMap || !this.colorMap[layer.properties.fips]) {
      return this.props.defaultColor;
    }
    return this.colorMap[layer.properties.fips]
  }

  highlightLayer (event) {
    let layer = event.target;

    layer.setStyle({
      className: this.props.highliteClassName,
      weight: 5,
      color: '#6F5204',
      dashArray: '',
      fillOpacity: 0.7,
      fillColor: '#5EAA00'
    });

    if (!L.Browser.ie && !L.Browser.opera) {
      layer.bringToFront();
    }
  }

  resetLayer (event) {
    var layer = (typeof event.target === 'undefined') ? event : event.target;
    // layer.setStyle(this.styleLayer(layer))
    this.geoLayer.resetStyle(layer);
  }

  hideLayer (layer) {
    layer.setStyle({
      stroke: false,
      fill: false
    });
  }

  focusOnMap () {
    this.map.setView([44.121, -120.587], this.props.zoomLevel,
      {animate: true, pan: {animate: true, duration: 1}, zoom: {animate: true}});
  }

  handleClick (event) {
    var layer = (typeof event.target === 'undefined') ? event : event.target;
    if (!this.props.onCountySelect) {
      return
    }
    this.props.onCountySelect({name: layer.feature.properties.name, fips: layer.feature.properties.fips});
  }

  focusOnLayer (event) {
    var layer = (typeof event.target === 'undefined') ? event : event.target;
    this.map.fitBounds(layer.getBounds(), {animate: true, pan: {animate: true, duration: 1}, zoom: {animate: true}});
  }

  render () {
    let { sortMapBy } = this.props
    console.log(sortMapBy)
    if (this.geoLayer) {
      let mapColor = {};
      this.props.countyColors.map((item) => {
        let color = ''
        switch(item[sortMapBy]) {
            case "very low":
                color = "#E1D837"
                break;
            case "low":
                color = "#BCCA30"
                break;
            case "moderate":
                color = "#A1C02A"
                break;
            case "high":
                color = "#87B725"
                break;
            case "very high":
                color = "#5EAA00"
                break;
        }
        if(this.props.selectedCounty.name === item.county){
          color = "orange"
        }
        mapColor[item.fips] = color;
      })
      this.colorMap = mapColor;
      let fips = this.props.focusedCounty || '41';
      let layers = this.geoLayer.getLayers();

      layers.forEach((layer) => {
        this.resetLayer(layer);
      })

      if (fips === '41') {
        this.focusOnMap();
      } else {
        layers.forEach((layer) => {
          if (layer.feature.properties.fips === fips) {
            this.focusOnLayer(layer);
          } else {
            this.hideLayer(layer);
          }
        });
      }
    }
    return (

      <div id='map' style={{marginTop: "200px", width: this.props.width, height: this.props.height, padding: '1em'}}

        className='leaflet-container leaflet-retina leaflet-fade-anim'></div>
    )
  }
}
Map.propTypes = {
  selectedCounty: PropTypes.Object,
  sortMapBy: PropTypes.string,
  focusedCounty: PropTypes.string,
  countyColors: PropTypes.arrayOf(React.PropTypes.shape({
    fips: React.PropTypes.string,
    color: React.PropTypes.string
  })),
  height: PropTypes.string,
  width: PropTypes.string,
  zoomLevel: PropTypes.number,
  onCountySelect: PropTypes.func,
  highliteClassName: PropTypes.string,
  defaultColor: PropTypes.string
};

Map.defaultProps = {
  height: '100%',
  width: '100%',
  zoomLevel: 7,
  highliteClassName: 'awesome-default-highlite',
  defaultColor: '#A1C02A'
};

export default Map;
