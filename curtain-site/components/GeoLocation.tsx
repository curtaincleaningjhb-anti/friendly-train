"use client";

import { useEffect, useState } from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";

interface GeoLocationData {
  city: string | null;
  region: string | null;
  country: string | null;
  latitude: number | null;
  longitude: number | null;
}

export default function GeoLocation() {
  const [location, setLocation] = useState<GeoLocationData | null>(null);
  const [distance, setDistance] = useState<number | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const fetchGeoLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        const geoData: GeoLocationData = {
          city: data.city || null,
          region: data.region || null,
          country: data.country_name || null,
          latitude: data.latitude || null,
          longitude: data.longitude || null,
        };
        
        setLocation(geoData);

        if (geoData.latitude && geoData.longitude) {
          const businessLat = -26.2041;
          const businessLon = 28.0473;
          const calculatedDistance = calculateDistance(
            geoData.latitude,
            geoData.longitude,
            businessLat,
            businessLon
          );
          setDistance(calculatedDistance);

          if (calculatedDistance <= 25 && geoData.city === 'Johannesburg') {
            setShowBanner(true);
          }
        }
      } catch (error) {
        console.error('Geo-location detection failed:', error);
      }
    };

    fetchGeoLocation();
  }, []);

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const toRad = (value: number): number => {
    return (value * Math.PI) / 180;
  };

  if (!showBanner || !location || distance === null) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-accent to-secondary text-white py-3 px-4 shadow-md" role="alert" aria-live="polite">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-center">
        <MapPinIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
        <p className="text-sm md:text-base font-medium">
          <span className="font-bold">Great news!</span> We're only {distance.toFixed(1)} km away from you in {location.city}. 
          <span className="hidden md:inline"> Book same-day service!</span>
        </p>
        <button
          onClick={() => setShowBanner(false)}
          className="ml-2 text-white hover:text-gray-200 font-bold"
          aria-label="Close location banner"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
