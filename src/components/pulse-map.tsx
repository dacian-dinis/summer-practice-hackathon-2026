"use client";

import "leaflet/dist/leaflet.css";

import type { DivIcon } from "leaflet";
import { useEffect, useMemo, type ComponentType, type ReactNode } from "react";
import {
  Circle,
  MapContainer,
  Marker,
  Pane,
  Popup,
  TileLayer,
  ZoomControl,
  useMap,
} from "react-leaflet";

import { CITIES, DEFAULT_CITY } from "@/lib/cities";

type GroupStatus = "FORMING" | "CONFIRMED" | "DONE";

type GroupMapItem = {
  id: string;
  sportName: string;
  sportEmoji: string;
  status: GroupStatus;
  needs: number;
  venue?: {
    lat: number;
    lng: number;
  };
  captain: string;
};

type VenueMapItem = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  sportNames: string[];
};

type EventMapItem = {
  id: string;
  venue: {
    name: string;
    lat: number;
    lng: number;
  };
  sportEmoji: string;
  time: string;
};

type MapCenter = {
  lat: number;
  lng: number;
};

type ActivityCluster = {
  key: string;
  lat: number;
  lng: number;
  count: number;
};

type MarkerIcon = DivIcon;

type DivIconOptions = {
  className: string;
  html: string;
  iconSize: [number, number];
  iconAnchor: [number, number];
  popupAnchor: [number, number];
};

const { divIcon } = require("leaflet") as {
  divIcon: (options: DivIconOptions) => MarkerIcon;
};

const LeafletMapContainer = MapContainer as unknown as ComponentType<{
  center: [number, number];
  children?: ReactNode;
  className?: string;
  maxZoom?: number;
  minZoom?: number;
  scrollWheelZoom?: boolean;
  zoom: number;
  zoomControl?: boolean;
}>;

const LeafletTileLayer = TileLayer as unknown as ComponentType<{
  attribution?: string;
  pane?: string;
  url: string;
}>;

const LeafletCircle = Circle as unknown as ComponentType<{
  center: [number, number];
  pathOptions: {
    color: string;
    fillColor: string;
    fillOpacity: number;
    stroke: boolean;
    weight: number;
  };
  pane?: string;
  radius: number;
}>;

const LeafletMarker = Marker as unknown as ComponentType<{
  children?: ReactNode;
  icon: MarkerIcon;
  position: [number, number];
  zIndexOffset?: number;
}>;

export type PulseMapProps = {
  center?: MapCenter;
  cityName: string;
  groups: GroupMapItem[];
  venues: VenueMapItem[];
  events: EventMapItem[];
};

const defaultCenter: MapCenter = {
  lat: CITIES[DEFAULT_CITY].lat,
  lng: CITIES[DEFAULT_CITY].lng,
};

const MAP_ZOOM = 12;
const CLUSTER_BUCKET_SIZE = 0.01;
const ZONE_RADIUS_METERS = 600;

function toLeafletCenter(center: MapCenter): [number, number] {
  return [center.lat, center.lng];
}

function MapViewport({ center }: { center: MapCenter }): null {
  const map = useMap();

  useEffect(() => {
    map.setView([center.lat, center.lng], MAP_ZOOM);
    map.scrollWheelZoom.enable();
  }, [center.lat, center.lng, map]);

  return null;
}

function distanceSquared(
  source: { lat: number; lng: number },
  target: { lat: number; lng: number },
): number {
  const latDiff = source.lat - target.lat;
  const lngDiff = source.lng - target.lng;

  return latDiff * latDiff + lngDiff * lngDiff;
}

function findNearestVenuePosition(
  group: GroupMapItem,
  venues: VenueMapItem[],
  center: MapCenter,
): { lat: number; lng: number } {
  if (group.venue) {
    return group.venue;
  }

  if (venues.length === 0) {
    return center;
  }

  const sportVenueMatches = venues.filter((venue) => venue.sportNames.includes(group.sportName));

  if (sportVenueMatches.length > 0) {
    const [nearestSportVenue] = [...sportVenueMatches].sort(
      (left, right) =>
        distanceSquared({ lat: left.lat, lng: left.lng }, center) -
        distanceSquared({ lat: right.lat, lng: right.lng }, center),
    );

    return {
      lat: nearestSportVenue.lat,
      lng: nearestSportVenue.lng,
    };
  }

  const [fallbackVenue] = [...venues].sort(
    (left, right) =>
      distanceSquared({ lat: left.lat, lng: left.lng }, center) -
      distanceSquared({ lat: right.lat, lng: right.lng }, center),
  );

  return {
    lat: fallbackVenue.lat,
    lng: fallbackVenue.lng,
  };
}

function createVenueIcon(): MarkerIcon {
  return divIcon({
    className: "pulse-div-icon",
    html: `
      <div class="pulse-marker pulse-marker--venue">
        <span class="pulse-marker__glow"></span>
        <span class="pulse-marker__core"></span>
      </div>
    `,
    iconSize: [26, 26],
    iconAnchor: [13, 13],
    popupAnchor: [0, -14],
  });
}

function createGroupIcon(needs: number): MarkerIcon {
  return divIcon({
    className: "pulse-div-icon",
    html: `
      <div class="pulse-marker pulse-marker--group">
        <span class="pulse-marker__halo"></span>
        <span class="pulse-marker__ring"></span>
        <span class="pulse-marker__core"></span>
        <span class="pulse-marker__badge">needs ${needs} more</span>
      </div>
    `,
    iconSize: [120, 56],
    iconAnchor: [18, 18],
    popupAnchor: [0, -18],
  });
}

function createEventIcon(): MarkerIcon {
  return divIcon({
    className: "pulse-div-icon",
    html: `
      <div class="pulse-marker pulse-marker--event">
        <span class="pulse-marker__halo"></span>
        <span class="pulse-marker__ring"></span>
        <span class="pulse-marker__core"></span>
      </div>
    `,
    iconSize: [48, 48],
    iconAnchor: [24, 24],
    popupAnchor: [0, -24],
  });
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const normalized = hex.replace("#", "");

  return {
    r: Number.parseInt(normalized.slice(0, 2), 16),
    g: Number.parseInt(normalized.slice(2, 4), 16),
    b: Number.parseInt(normalized.slice(4, 6), 16),
  };
}

function mixChannel(start: number, end: number, progress: number): number {
  return Math.round(start + (end - start) * progress);
}

function mixColor(startHex: string, endHex: string, progress: number): string {
  const start = hexToRgb(startHex);
  const end = hexToRgb(endHex);

  return `rgb(${mixChannel(start.r, end.r, progress)}, ${mixChannel(start.g, end.g, progress)}, ${mixChannel(start.b, end.b, progress)})`;
}

function getZoneColor(intensity: number): string {
  if (intensity <= 0.5) {
    return mixColor("#22d3ee", "#8b5cf6", intensity / 0.5);
  }

  return mixColor("#8b5cf6", "#ec4899", (intensity - 0.5) / 0.5);
}

function buildActivityClusters(venues: VenueMapItem[]): ActivityCluster[] {
  const buckets = new Map<
    string,
    {
      latTotal: number;
      lngTotal: number;
      count: number;
    }
  >();

  for (const venue of venues) {
    const latBucket = Math.round(venue.lat / CLUSTER_BUCKET_SIZE);
    const lngBucket = Math.round(venue.lng / CLUSTER_BUCKET_SIZE);
    const key = `${latBucket}:${lngBucket}`;
    const current = buckets.get(key);

    if (current) {
      current.latTotal += venue.lat;
      current.lngTotal += venue.lng;
      current.count += 1;
      continue;
    }

    buckets.set(key, {
      latTotal: venue.lat,
      lngTotal: venue.lng,
      count: 1,
    });
  }

  return [...buckets.entries()].map(([key, bucket]) => ({
    key,
    lat: bucket.latTotal / bucket.count,
    lng: bucket.lngTotal / bucket.count,
    count: bucket.count,
  }));
}

export default function PulseMap({
  center = defaultCenter,
  cityName = CITIES[DEFAULT_CITY].name,
  groups,
  venues,
  events,
}: PulseMapProps): JSX.Element {
  const showEmptyOverlay = groups.length === 0 && events.length === 0;
  const leafletCenter = toLeafletCenter(center);
  const venueIcon = useMemo(() => createVenueIcon(), []);
  const eventIcon = useMemo(() => createEventIcon(), []);
  const activityClusters = useMemo(() => buildActivityClusters(venues), [venues]);
  const maxClusterCount = useMemo(
    () => activityClusters.reduce((max, cluster) => Math.max(max, cluster.count), 1),
    [activityClusters],
  );

  return (
    <div className="pulse-map-shell relative h-[60vh] min-h-[420px] w-full overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-slate-950 dark:border-white/10 dark:bg-[#020617] md:h-[75vh]">
      <style jsx global>{`
        @keyframes pulse-green {
          0% {
            transform: scale(0.78);
            opacity: 0.8;
          }
          70% {
            transform: scale(1.3);
            opacity: 0;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }

        @keyframes pulse-orange {
          0% {
            transform: scale(0.72);
            opacity: 0.88;
          }
          70% {
            transform: scale(1.4);
            opacity: 0;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }

        .pulse-map-shell .leaflet-container {
          height: 100%;
          width: 100%;
          background: radial-gradient(circle at top, rgba(34, 211, 238, 0.08), transparent 34%),
            linear-gradient(180deg, #020617 0%, #050816 100%);
        }

        .pulse-map-shell .leaflet-control-attribution {
          background: rgba(2, 6, 23, 0.72);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 999px;
          color: rgba(255, 255, 255, 0.58);
          margin: 0 12px 12px 0;
          padding: 4px 10px;
          backdrop-filter: blur(14px);
        }

        .pulse-map-shell .leaflet-control-attribution a {
          color: rgba(103, 232, 249, 0.88);
        }

        .pulse-map-shell .leaflet-bottom.leaflet-right {
          margin: 0 12px 12px 0;
        }

        .pulse-map-shell .leaflet-control-zoom {
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 18px 36px rgba(2, 6, 23, 0.4);
          backdrop-filter: blur(14px);
        }

        .pulse-map-shell .leaflet-control-zoom a {
          width: 38px;
          height: 38px;
          line-height: 38px;
          background: rgba(2, 6, 23, 0.78);
          color: rgba(255, 255, 255, 0.88);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .pulse-map-shell .leaflet-control-zoom a:last-child {
          border-bottom: 0;
        }

        .pulse-map-shell .leaflet-control-zoom a:hover {
          background: rgba(15, 23, 42, 0.92);
          color: #67e8f9;
        }

        .pulse-map-shell .leaflet-popup-content-wrapper,
        .pulse-map-shell .leaflet-popup-tip {
          background: rgba(2, 6, 23, 0.92);
          color: rgba(255, 255, 255, 0.92);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 24px 48px rgba(2, 6, 23, 0.45);
          backdrop-filter: blur(14px);
        }

        .pulse-map-shell .leaflet-popup-content {
          margin: 12px 14px;
          font-size: 13px;
          line-height: 1.4;
        }

        .pulse-div-icon {
          background: transparent;
          border: 0;
        }

        .pulse-marker {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pulse-marker__halo,
        .pulse-marker__ring,
        .pulse-marker__glow,
        .pulse-marker__core {
          position: absolute;
          border-radius: 999px;
        }

        .pulse-marker--venue {
          width: 26px;
          height: 26px;
        }

        .pulse-marker--venue .pulse-marker__glow {
          width: 18px;
          height: 18px;
          background: rgba(34, 211, 238, 0.24);
          box-shadow: 0 0 18px rgba(34, 211, 238, 0.58);
        }

        .pulse-marker--venue .pulse-marker__core {
          width: 8px;
          height: 8px;
          background: #67e8f9;
          box-shadow: 0 0 12px rgba(103, 232, 249, 0.95), 0 0 26px rgba(34, 211, 238, 0.52);
        }

        .pulse-marker--group {
          width: 120px;
          height: 56px;
          align-items: flex-start;
          justify-content: flex-start;
        }

        .pulse-marker--group .pulse-marker__halo {
          top: 0;
          left: 0;
          width: 36px;
          height: 36px;
          background: rgba(74, 222, 128, 0.28);
          animation: pulse-green 2.2s ease-out infinite;
        }

        .pulse-marker--group .pulse-marker__ring {
          top: 8px;
          left: 8px;
          width: 18px;
          height: 18px;
          border: 1px solid rgba(134, 239, 172, 0.9);
          box-shadow: 0 0 18px rgba(74, 222, 128, 0.54);
        }

        .pulse-marker--group .pulse-marker__core {
          top: 13px;
          left: 13px;
          width: 8px;
          height: 8px;
          background: #4ade80;
          box-shadow: 0 0 14px rgba(74, 222, 128, 0.95);
        }

        .pulse-marker__badge {
          position: absolute;
          top: 26px;
          left: 18px;
          padding: 4px 8px;
          border: 1px solid rgba(134, 239, 172, 0.32);
          border-radius: 999px;
          background: rgba(2, 6, 23, 0.8);
          color: rgba(220, 252, 231, 0.92);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          white-space: nowrap;
          backdrop-filter: blur(12px);
        }

        .pulse-marker--event {
          width: 48px;
          height: 48px;
        }

        .pulse-marker--event .pulse-marker__halo {
          width: 42px;
          height: 42px;
          background: rgba(249, 115, 22, 0.26);
          animation: pulse-orange 1.45s ease-out infinite;
        }

        .pulse-marker--event .pulse-marker__ring {
          width: 22px;
          height: 22px;
          border: 1px solid rgba(253, 186, 116, 0.9);
          box-shadow: 0 0 18px rgba(249, 115, 22, 0.62);
        }

        .pulse-marker--event .pulse-marker__core {
          width: 12px;
          height: 12px;
          background: #fb923c;
          box-shadow: 0 0 16px rgba(251, 146, 60, 1), 0 0 30px rgba(249, 115, 22, 0.72);
        }
      `}</style>

      <div className="pointer-events-none absolute left-4 top-4 z-[500] rounded-full border border-white/10 bg-black/60 px-4 py-2 text-sm font-medium text-white/90 shadow-[0_16px_40px_rgba(2,6,23,0.32)] backdrop-blur">
        Pickup games in {cityName}
      </div>
      {showEmptyOverlay ? (
        <div className="pointer-events-none absolute left-4 top-16 z-[500] rounded-full border border-white/10 bg-black/60 px-4 py-2 text-sm text-white/75 shadow-[0_16px_40px_rgba(2,6,23,0.32)] backdrop-blur">
          No live games yet
        </div>
      ) : null}
      <div className="pointer-events-none absolute bottom-4 left-4 z-[500] rounded-2xl border border-white/10 bg-black/55 px-4 py-3 text-white/90 shadow-[0_20px_50px_rgba(2,6,23,0.4)] backdrop-blur-md">
        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />
            <span>Venues</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-green-400 shadow-[0_0_14px_rgba(74,222,128,0.9)]" />
            <span>Forming groups</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-orange-400 shadow-[0_0_14px_rgba(251,146,60,0.95)]" />
            <span>Today&apos;s events</span>
          </div>
        </div>
        <div className="mt-3 border-t border-white/10 pt-3 text-[11px] uppercase tracking-[0.18em] text-white/55">
          {groups.length} groups, {events.length} events, {venues.length} venues
        </div>
      </div>

      <LeafletMapContainer
        center={leafletCenter}
        className="h-full w-full"
        maxZoom={17}
        minZoom={10}
        scrollWheelZoom
        zoom={MAP_ZOOM}
        zoomControl={false}
      >
        <MapViewport center={center} />
        <ZoomControl position="bottomright" />

        <LeafletTileLayer
          attribution='&copy; <a href="https://carto.com">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
        />

        <Pane name="activity-zones" style={{ zIndex: 320 }}>
          {activityClusters.map((cluster) => {
            const intensity = cluster.count / maxClusterCount;
            const fillColor = getZoneColor(intensity);

            return (
              <LeafletCircle
                center={[cluster.lat, cluster.lng]}
                key={cluster.key}
                pane="activity-zones"
                pathOptions={{
                  color: fillColor,
                  fillColor,
                  fillOpacity: 0.08 + intensity * 0.1,
                  stroke: false,
                  weight: 0,
                }}
                radius={ZONE_RADIUS_METERS}
              />
            );
          })}
        </Pane>

        {venues.map((venue) => (
          <LeafletMarker icon={venueIcon} key={venue.id} position={[venue.lat, venue.lng]} zIndexOffset={0}>
            <Popup>{venue.name}</Popup>
          </LeafletMarker>
        ))}

        {groups.map((group) => {
          const position = findNearestVenuePosition(group, venues, center);

          return (
            <LeafletMarker
              icon={createGroupIcon(group.needs)}
              key={group.id}
              position={[position.lat, position.lng]}
              zIndexOffset={120}
            >
              <Popup>{`Need ${group.needs} more for ${group.sportEmoji} ${group.sportName}`}</Popup>
            </LeafletMarker>
          );
        })}

        {events.map((event) => (
          <LeafletMarker
            icon={eventIcon}
            key={event.id}
            position={[event.venue.lat, event.venue.lng]}
            zIndexOffset={240}
          >
            <Popup>{`${event.venue.name} - ${event.time} - ${event.sportEmoji}`}</Popup>
          </LeafletMarker>
        ))}

        <Pane name="labels-overlay" style={{ pointerEvents: "none", zIndex: 900 }}>
          <LeafletTileLayer
            attribution=""
            pane="labels-overlay"
            url="https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png"
          />
        </Pane>
      </LeafletMapContainer>
    </div>
  );
}
