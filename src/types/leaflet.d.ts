declare module "leaflet" {
  export type LatLngExpression =
    | [number, number]
    | { lat: number; lng: number }
    | { lat: number; lon: number };

  export type LatLngBoundsExpression =
    | [LatLngExpression, LatLngExpression]
    | LatLngExpression[];

  export interface LayerOptions {
    attribution?: string;
    pane?: string;
  }

  export interface InteractiveLayerOptions extends LayerOptions {}

  export interface PathOptions extends InteractiveLayerOptions {
    color?: string;
    fillColor?: string;
    fillOpacity?: number;
    stroke?: boolean;
    weight?: number;
  }

  export interface CircleMarkerOptions extends PathOptions {
    radius?: number;
  }

  export interface CircleOptions extends CircleMarkerOptions {}

  export interface MarkerOptions extends InteractiveLayerOptions {
    icon?: unknown;
    zIndexOffset?: number;
  }

  export interface TileLayerOptions extends LayerOptions {}

  export interface FitBoundsOptions {}

  export interface MapOptions {
    center?: LatLngExpression;
    zoom?: number;
    minZoom?: number;
    maxZoom?: number;
    scrollWheelZoom?: boolean;
    zoomControl?: boolean;
  }

  export class Map {
    setView(center: LatLngExpression, zoom?: number): this;
    scrollWheelZoom: {
      enable(): void;
    };
  }

  export class Marker<T = unknown> {}

  export class Circle<T = unknown> {}

  export class TileLayer {}

  export class DivIcon {}

  export function divIcon(options: {
    className: string;
    html: string;
    iconSize: [number, number];
    iconAnchor: [number, number];
    popupAnchor: [number, number];
  }): DivIcon;
}
