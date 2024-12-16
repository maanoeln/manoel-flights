import {
  Timeline,
  Language,
  LocalAtm,
  EditLocationOutlined,
  HelpOutline,
  FeedbackOutlined,
  Settings,
} from '@mui/icons-material';
import { ReactElement } from 'react';

interface IItems {
  label: string;
  icon: ReactElement;
}

export const DRAWER_MENU_ITEMS: IItems[] = [
  {
    label: 'Tracked flights price',
    icon: <Timeline fontSize='small' color='primary' />,
  },
  {
    label: 'Change language',
    icon: <Language fontSize='small' color='primary' />,
  },
  {
    label: 'Change currency',
    icon: <LocalAtm fontSize='small' color='primary' />,
  },
  {
    label: 'change location',
    icon: <EditLocationOutlined fontSize='small' color='primary' />,
  },
];

export const DRAWER_SETTINGS_ITEMS: IItems[] = [
  {
    label: 'Flight settings',
    icon: <Settings fontSize='small' color='primary' />,
  },
  {
    label: 'Feedback',
    icon: <FeedbackOutlined fontSize='small' color='primary' />,
  },
  {
    label: 'Help',
    icon: <HelpOutline fontSize='small' color='primary' />,
  },
];
