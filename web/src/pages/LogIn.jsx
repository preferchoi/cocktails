import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import DefaultLayout from '../components/layout/DefaultLayout';
import LogInForm from '../components/auth/LogInForm';

export default function LogIn() {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.800')}>
      <DefaultLayout>
        <Flex align={'center'} justify={'center'}>
          <LogInForm />
        </Flex>
      </DefaultLayout>
    </Box>
  );
}
