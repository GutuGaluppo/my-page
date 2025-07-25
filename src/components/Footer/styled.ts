import { styled } from '@mui/material/styles';
import { Container, Box, Typography, Link } from '@mui/material';

export const FooterContainer = styled(Box)({
  backgroundColor: '#F9FAFB',
  padding: '60px 0 30px',
  marginTop: '80px',
});

export const FooterContent = styled(Container)({
  display: 'grid',
  gridTemplateColumns: '2fr 1fr 1fr 1fr',
  gap: '40px',
  '@media (max-width: 768px)': {
    gridTemplateColumns: '1fr',
    gap: '30px',
  },
});

export const FooterSection = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
});

export const FooterLogo = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '18px',
  color: '#3B82F6',
  marginBottom: '15px',
});

export const FooterDescription = styled(Typography)({
  fontSize: '0.9rem',
  color: '#6B7280',
  lineHeight: '1.6',
});

export const FooterTitle = styled(Typography)({
  fontSize: '1rem',
  fontWeight: '600',
  color: '#1F2937',
  marginBottom: '15px',
  textTransform: 'uppercase',
});

export const FooterLink = styled(Link)({
  fontSize: '0.9rem',
  color: '#6B7280',
  textDecoration: 'none',
  '&:hover': {
    color: '#3B82F6',
  },
});

export const Copyright = styled(Typography)({
  fontSize: '0.8rem',
  color: '#9CA3AF',
  textAlign: 'center',
  marginTop: '40px',
  paddingTop: '20px',
  borderTop: '1px solid #E5E7EB',
});

