"use client";

import "leaflet/dist/leaflet.css";

import type { ComponentType, ReactNode } from "react";
import { useEffect } from "react";
import { CircleMarker, MapContainer, Popup, TileLayer, useMap } from "react-leaflet";

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

const LeafletMapContainer = MapContainer as unknown as ComponentType<{
  center: [number, number];
  children?: ReactNode;
  className?: string;
  scrollWheelZoom?: boolean;
  zoom: number;
}>;

const LeafletTileLayer = TileLayer as unknown as ComponentType<{
  attribution?: string;
  url: string;
}>;

const LeafletCircleMarker = CircleMarker as unknown as ComponentType<{
  center: [number, number];
  children?: ReactNode;
  fillColor: string;
  fillOpacity: number;
  pathOptions: {
    color?: string;
    weight?: number;
  };
  radius: number;
}>;

const LeafletPopup = Popup as unknown as ComponentType<{
  children?: ReactNode;
}>;

function toLeafletCenter(center: MapCenter): [number, number] {
  return [center.lat, center.lng];
}

function MapViewport({ center }: { center: MapCenter }): null {
  const map = useMap();

  useEffect(() => {
    map.setView([center.lat, center.lng], 12);
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

export default function PulseMap({
  center = defaultCenter,
  cityName = CITIES[DEFAULT_CITY].name,
  groups,
  venues,
  events,
}: PulseMapProps): JSX.Element {
  const showEmptyOverlay = groups.length === 0 && events.length === 0;
  const leafletCenter = toLeafletCenter(center);

  return (
    <div className="relative h-[70vh] min-h-[420px] w-full">
      <div className="pointer-events-none absolute left-4 top-4 z-[500] rounded-full border border-white/70 bg-white/85 px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm backdrop-blur">
        Pickup games in {cityName}
      </div>
      {showEmptyOverlay ? (
        <div className="pointer-events-none absolute left-4 top-16 z-[500] rounded-full border border-white/70 bg-white/85 px-4 py-2 text-sm text-neutral-700 shadow-sm backdrop-blur">
          No live games yet
        </div>
      ) : null}
      <LeafletMapContainer center={leafletCenter} className="h-full w-full" scrollWheelZoom zoom={12}>
        <MapViewport center={center} />
        <LeafletTileLayer
          attribution="&copy; OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {venues.map((venue) => (
          <LeafletCircleMarker
            center={[venue.lat, venue.lng]}
            fillColor="#737373"
            fillOpacity={0.9}
            key={venue.id}
            pathOptions={{ color: "#737373", weight: 1 }}
            radius={6}
          >
            <LeafletPopup>{venue.name}</LeafletPopup>
          </LeafletCircleMarker>
        ))}

        {groups.map((group) => {
          const position = findNearestVenuePosition(group, venues, center);

          return (
            <LeafletCircleMarker
              center={[position.lat, position.lng]}
              fillColor="#16a34a"
              fillOpacity={0.95}
              key={group.id}
              pathOptions={{ color: "#166534", weight: 2 }}
              radius={9}
            >
              <LeafletPopup>{`Need ${group.needs} more for ${group.sportEmoji} ${group.sportName}`}</LeafletPopup>
            </LeafletCircleMarker>
          );
        })}

        {events.map((event) => (
          <LeafletCircleMarker
            center={[event.venue.lat, event.venue.lng]}
            fillColor="#f97316"
            fillOpacity={0.95}
            key={event.id}
            pathOptions={{ color: "#c2410c", weight: 2 }}
            radius={10}
          >
            <LeafletPopup>{`${event.venue.name} - ${event.time} - ${event.sportEmoji}`}</LeafletPopup>
          </LeafletCircleMarker>
        ))}
      </LeafletMapContainer>
    </div>
  );
}
