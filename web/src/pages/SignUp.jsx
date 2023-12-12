import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import DefaultLayout from '../components/layout/DefaultLayout';
import SignUpForm from '../components/auth/SignUpForm';

export default function SignUp() {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.800')}>
      <DefaultLayout>
        <Flex align={'center'} justify={'center'}>
          <SignUpForm />
        </Flex>
      </DefaultLayout>
    </Box>
  );
}
