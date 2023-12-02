import { Box } from '@chakra-ui/react';
import NavBar from '../nav/NavBar.jsx';

export default function DefaultLayout({ children, bg }) {
  return (
    <div>
      <NavBar />
      <Box
        px={{ base: 4 }}
        pt={24}
        mx={'auto'}
        maxW={'960px'}
        minH={'100vh'}
        w={'100%'}
        bg={bg}
      >
        {children}
      </Box>
    </div>
  );
}
