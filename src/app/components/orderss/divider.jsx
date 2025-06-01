import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

export default function AccordionUsage() {
  return (
    <Box sx={{ px: { xs: 1, sm: 2 }, maxWidth: '100%', overflow: 'hidden',my:'20px', border:'1px solid black', borderRadius:'5px', p:2 }}>
      <Accordion sx={{ mt: '30px', width: '100%' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontSize: { xs: '14px', sm: '16px' } }}>
            Essence
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ width: '100%' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontSize: { xs: '14px', sm: '16px' } }}>
            Eyeshadow
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ width: '100%' }} defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontSize: { xs: '14px', sm: '16px' } }}>
            Powder Canister
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            The Powder Canister is a finely milled setting powder designed to set makeup and control shine.
          </Typography>
        </AccordionDetails>
        <AccordionActions>
          <Button size="small">Cancel</Button>
          <Button size="small">Agree</Button>
        </AccordionActions>
      </Accordion>
    </Box>
  );
}