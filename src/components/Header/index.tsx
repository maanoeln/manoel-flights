import React, { useState } from 'react';
import Drawer from '../Drawer';
import AppBar from '../AppBar';
import { Box } from '@mui/material';

interface SearchBarProps {
  label?: string;
  value?: string;
  onChange?(): (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header: React.FC<SearchBarProps> = () => {
  const [open, setOpen] = useState(false);

  const handleOpenClick = () => {
    setOpen((state) => !state);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar handleOpen={handleOpenClick} />
      <Drawer open={open} handleClose={handleOpenClick} />
    </Box>
  );
};

export default Header;
