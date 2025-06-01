import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

export default function TehranMap() {
  const position = [35.7000, 51.3389];

  return (
    <Box sx={{ 
      minWidth: '390px',
      height: '400px',
      borderRadius: 2,
      overflow: 'hidden',
      boxShadow: 3,
      mt: 4
    }}>
      <Typography variant="h6" sx={{ p: 2, bgcolor: 'primary.main', color: 'greenyellow' }}>
        map tehran 
      </Typography>
      
      <MapContainer 
        center={position} 
        zoom={12} 
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            تهران، میدان آزادی
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
}