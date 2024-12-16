import { Chip as ChipMui } from '@mui/material';
import { ReactElement } from 'react';

interface Props {
  icon: ReactElement;
  label: string;
}
function Chip({ icon, label }: Props) {
  return (
    <ChipMui
      icon={icon}
      label={label}
      color='primary'
      variant='outlined'
      sx={{ padding: '8px', height: '36px' }}
    />
  );
}

export default Chip;
