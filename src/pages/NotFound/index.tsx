import styled from '@emotion/styled';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background-color: #eeeeee;
`;

export const NotFound = () => {
  return (
    <Container>
      404
      <br />
      NOT FOUND
    </Container>
  )
}