import { createTheme, ThemeProvider } from '@mui/material';
import { PropsWithChildren } from 'react';

const Theme = ({ children }: PropsWithChildren) => {
  const theme = createTheme({
    palette: {
      background: {
        default: '#202124',
      },
      primary: {
        main: '#E6E6E6',
      },
      secondary: {
        main: '#A7C6FA',
      },
      divider: '#E6E6E6',
    },
    components: {
      MuiBackdrop: {
        defaultProps: {
          sx: {
            backgroundColor: 'transparent',
          },
        },
      },
      MuiPaper: {
        defaultProps: {
          sx: {
            backgroundColor: '#333437',
          },
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
