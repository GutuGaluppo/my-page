import { styled } from '@mui/material/styles';
import { Container, Box, Typography, Card } from '@mui/material';

export const FeaturesContainer = styled(Container)({
  padding: '80px 0',
});

export const FeaturesGrid = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '30px',
  marginTop: '40px',
});

export const FeatureCard = styled(Card)({
  padding: '30px 20px',
  textAlign: 'left',
  border: 'none',
  boxShadow: 'none',
  backgroundColor: 'transparent',
});

export const FeatureTitle = styled(Typography)({
  fontSize: '1.1rem',
  fontWeight: '600',
  color: '#1F2937',
  marginBottom: '10px',
});

export const FeatureDescription = styled(Typography)({
  fontSize: '0.9rem',
  color: '#6B7280',
  lineHeight: '1.6',
});

export const FeatureIcon = styled(Box)({
  marginBottom: '20px',
  '& svg': {
    fontSize: '2rem',
    color: '#3B82F6',
  },
});

