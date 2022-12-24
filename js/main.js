import Map from 'ol/Map.js';
import View from 'ol/View.js';
import {DrawPolygon} from './draw'
import {RasterStatistics} from "./raster";
import {Vector as VectorSource} from "ol/source";
import {Vector as VectorLayer} from "ol/layer";


const map = new Map({
    target: 'map',
    view: new View({
        center: [-11000000, 4600000],
        zoom: 15,
    }),
});

const source = new VectorSource();

const vector = new VectorLayer({
    source: source,
    style: {
        'fill-color': 'rgba(255, 255, 255, 0.2)',
        'stroke-color': '#ffcc33',
        'stroke-width': 2,
        'circle-radius': 7,
        'circle-fill-color': '#ffcc33',
    },
});

const rasterStatistics = new RasterStatistics(map, vector);
const draw = new DrawPolygon(map, vector);
draw.onDrawEnd((x) => rasterStatistics.plot.call(rasterStatistics, x))
draw.onDrawStart((x) => rasterStatistics.clear.call(rasterStatistics, x))