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
  useToast,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useSignUpMutation } from '../../generated/graphql.tsx';
import { useForm } from "react-hook-form";

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
        <SignUpRealForm />
      </Box>
    </Stack>
  );
}

function SignUpRealForm() {
  const [signUp, { loading }] = useSignUpMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const toast = useToast();

  const onSubmit = async data => {
    const { signUpInput } = data;
    return signUp({ variables: { 'SignUpInput':signUpInput } })
      .then(res => {
        if (res.data?.SignUp) {
          toast({ title: '회원가입을 환영합니다!', status: 'success' });
          navigate('/');
        } else {
          toast({
            title: '회원가입 도중 문제가 발생했습니다.',
            status: 'error',
          });
        }
      })
      .catch(err => {
        toast({ title: '이메일 또는 아이디가 중복됩니다.', status: 'error' });
        console.log(err);
        return err;
      });
  };

  return (
    <Stack as={'form'} spacing={4} onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.signUpInput?.email}>
        <FormLabel>이메일</FormLabel>
        <Input
          type="email"
          placeholder="example@example.com"
          {...register('signUpInput.email', {
            required: '이메일을 입력해주세요.',
            pattern: {
              value:
                // eslint-disable-next-line max-len
                /^[a-zA-Z-0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: '이메일의 형식이 올바르지 않습니다.',
            },
          })}
        />
        <FormErrorMessage>
          {errors.signUpInput?.email && errors.signUpInput.email.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.signUpInput?.username}>
        <FormLabel>아이디</FormLabel>
        <Input
          type="text"
          placeholder="example"
          {...register('signUpInput.username', {
            required: '아이디를 입력해주세요.',
          })}
        />
        <FormErrorMessage>
          {errors.signUpInput?.username && errors.signUpInput.username.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.signUpInput?.password}>
        <FormLabel>비밀번호</FormLabel>
        <Input
          type="password"
          placeholder="8자 이상의 영문, 숫자, 특수문자"
          {...register('signUpInput.password', {
            required: '비밀번호를 입력해주세요.',
            min: { value: 8, message: '비밀번호는 8자 이상이어야 합니다.' },
            pattern: {
              value:
                // eslint-disable-next-line max-len
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
              message:
                '암호는 문자, 숫자, 특수문자를 포함한 8자 이상이어야 합니다.',
            },
          })}
        />
        <FormErrorMessage>
          {errors.signUpInput?.password && errors.signUpInput.password.message}
        </FormErrorMessage>
      </FormControl>
      <Divider />
      <Button colorScheme="teal" type="submit" isLoading={loading}>
        계정 생성
      </Button>
    </Stack>
  );
}
