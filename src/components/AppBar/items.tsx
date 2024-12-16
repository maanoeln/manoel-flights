import {
  Flight,
  House,
  LocalHotel,
  Luggage,
  TravelExplore,
} from '@mui/icons-material';
import { ReactElement } from 'react';

interface IItems {
  label: string;
  icon: ReactElement;
}

interface IProps {
  color: 'primary' | 'secondary';
  fontSize: 'small' | 'medium';
}

export const APPBAR_ITEMS = ({ color, fontSize }: IProps): IItems[] => [
  {
    label: 'Travel',
    icon: <Luggage color={color} fontSize={fontSize} />,
  },
  {
    label: 'Explore',
    icon: <TravelExplore color={color} fontSize={fontSize} />,
  },
  {
    label: 'Flights',
    icon: <Flight color={color} fontSize={fontSize} />,
  },
  {
    label: 'Hotels',
    icon: <LocalHotel color={color} fontSize={fontSize} />,
  },
  {
    label: 'Vacation rentals',
    icon: <House color={color} fontSize={fontSize} />,
  },
];
