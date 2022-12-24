import {Vector as VectorSource} from "ol/source";
import {Vector as VectorLayer} from "ol/layer";
import Draw, {createBox} from "ol/interaction/Draw";
import {Circle as CircleStyle, Fill, Stroke, Style} from "ol/style";


export const getVectorSourceForDrawing = () => {
    const source = new VectorSource();

    return new VectorLayer({
        source: source,
        style: {
            'fill-color': 'rgba(255, 255, 255, 0.2)',
            'stroke-color': '#ffcc33',
            'stroke-width': 2,
            'circle-radius': 7,
            'circle-fill-color': '#ffcc33',
        },
    });
}

export const getBoxDrawInteraction = (vectorLayer) => {
    const type = "Circle"
    const geometryFunction = createBox()
    return new Draw({
        source: vectorLayer.getSource(),
        type: type,
        geometryFunction: geometryFunction,
        style: new Style({
            fill: new Fill({
                color: 'rgba(255, 255, 255, 0.2)',
            }),
            stroke: new Stroke({
                color: 'rgba(0, 0, 0, 0.5)',
                lineDash: [10, 10],
                width: 2,
            }),
            image: new CircleStyle({
                radius: 5,
                stroke: new Stroke({
                    color: 'rgba(0, 0, 0, 0.7)',
                }),
                fill: new Fill({
                    color: 'rgba(255, 255, 255, 0.2)',
                }),
            }),
        }),
    });

}