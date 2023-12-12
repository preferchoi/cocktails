import {
  Box,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function SignUpForm() {
  return (
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Stack align={'center'}>
        <Heading fontSize={'4xl'}>계정 생성</Heading>
        <Text fontSize={'lg'}>환영합니다!</Text>
      </Stack>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}
      >
        asd
      </Box>
    </Stack>
  );
}
