import { Button, LinkOverlay } from '@chakra-ui/react';
import DefaultLayout from '../components/layout/DefaultLayout.jsx';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <DefaultLayout>
      <div>메인 페이지입니다.</div>
      <div>해당 웹에 대한 설명을 제공할 예정입니다.</div>
      <div>현재는 회원 기능이 제공되고 있지 않습니다. navBar 요소를 클릭해 페이지를 확인해 보세요.</div>
      <Button>
        <LinkOverlay as={Link} to={'/LogIn'}>로그인 하기</LinkOverlay>
      </Button>
      <Button>
        <LinkOverlay as={Link} to={'/signup'}>회원가입 하기</LinkOverlay>
      </Button>
    </DefaultLayout>
  );
}
