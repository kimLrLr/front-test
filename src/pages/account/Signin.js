import { Form, Button } from "react-bootstrap";
import styled from "styled-components";

const FormWrap = styled.section``;
const SignText = styled.h2`
  font-weight: 800;
  font-size: 18px;
  text-align: center;
  margin: 15px 0;
`;

export const Signin = () => {
  return (
    <FormWrap>
      <SignText>로그인</SignText>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>아이디</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          로그인하기
        </Button>
      </Form>
    </FormWrap>
  );
};
