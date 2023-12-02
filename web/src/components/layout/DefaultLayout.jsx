import { Box } from '@chakra-ui/react';
import NavBar from '../nav/NavBar.jsx';

export default function DefaultLayout({ children, bg }) {
  return (
    <div>
      <NavBar />
      <Box bg={bg}>{children}</Box>
    </div>
  );
}
