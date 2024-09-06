import Spinner from "react-bootstrap/Spinner";
import styled from "styled-components";

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => {
  return (
    <LoadingSpinner>
      <Spinner animation="border" variant="warning" />
    </LoadingSpinner>
  );
};
