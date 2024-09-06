import ListGroup from "react-bootstrap/ListGroup";
import styled from "styled-components";

const TypeTitle = styled(ListGroup.Item)`
  text-align: center;
`;
const ConTitle = styled(ListGroup.Item)`
  text-align: center;
`;

export const List = ({ usertype, inputdata }) => {
  return (
    <ListGroup variant="flush">
      <TypeTitle disabled>{usertype}</TypeTitle>
      <ConTitle>{inputdata}</ConTitle>
    </ListGroup>
  );
};
