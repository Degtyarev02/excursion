import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const Header = () => {
  return (
    <AppBar position="static" sx={{background: 'accent.main', boxShadow: 'none'}}>
      <Toolbar>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
