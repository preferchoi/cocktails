import {
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useLogInMutation } from '../../generated/graphql.tsx';
import { useForm } from 'react-hook-form';

export default function LoginForm() {
  return (
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Stack align={'center'}>
        <Heading fontSize={'4xl'}>Cocktails</Heading>
        <Text fontSize={'lg'} color={'gray.600'}>
          나만의 칵테일을 만들어보세요!
        </Text>
      </Stack>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}
      >
        <LogInRealForm />
      </Box>
    </Stack>
  );
}

function LogInRealForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const navigate = useNavigate();
  const [login, { loading }] = useLogInMutation();
  const onSubmit = async formData => {
    const { data } = await login({ variables: formData });
    if (data?.LogIn.errors) {
      data.LogIn.errors.forEach(err => {
        const field = 'loginInput.';
        setError(field + err.field, {
          message: err.message,
        });
      });
    }
    if (data && data.LogIn.accessToken) {
      localStorage.setItem('access_token', data.LogIn.accessToken);
      navigate('/');
    }
  };

  return (
    <Box
      rounded={'lg'}
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow={'lg'}
      p={8}
    >
      <Stack as={'form'} spacing={4} onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.loginInput?.email}>
          <FormLabel>이메일 또는 아이디</FormLabel>
          <Input
            type="email"
            placeholder="이메일을 입력하세요."
            {...register('loginInput.email', {
              required: '이메일을 입력해주세요',
            })}
          />
          <FormErrorMessage>
            {errors.loginInput?.email && errors.loginInput.email.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.loginInput?.password}>
          <FormLabel>비밀번호</FormLabel>
          <Input
            type="password"
            placeholder="********"
            {...register('loginInput.password', {
              required: '비밀번호를 입력해주세요.',
            })}
          />
          <FormErrorMessage>
            {errors.loginInput?.password && errors.loginInput.password.message}
          </FormErrorMessage>
        </FormControl>
        <Divider />
        <Button colorScheme="teal" type="submit" isLoading={loading}>
          로그인
        </Button>
      </Stack>
    </Box>
  );
}
