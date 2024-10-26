// src/components/react/HighlightCard.jsx
import { Card, CardContent, Typography } from '@mui/material';

function HighlightCard({ icon, title, description, color }) {
  return (
    <Card sx={{ background: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-color)', border: `1px solid ${color}`, textAlign: 'center' }}>
      <CardContent>
        {icon}
        <Typography variant="h6" sx={{ mt: 1, fontWeight: 'bold', color }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'var(--subtext-color)', mt: 1 }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default HighlightCard;