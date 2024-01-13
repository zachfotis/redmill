'use client';

import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';

const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });

function Map({ showHeader = true }: { showHeader?: boolean }) {
  const position: [number, number] = [40.8450697738782, 24.3065083112725];

  return (
    <MapContainer center={ position } zoom={ 14 } scrollWheelZoom={ false } style={ { width: '100%', height: '100%' } }>
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={ position } />
    </MapContainer>
  );
}

export default Map;
