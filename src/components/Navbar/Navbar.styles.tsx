import styled from '@emotion/styled';

export const Container = styled.div<{ scroll: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  padding: 0 5% 0 5%;
  height: 70px;
  background: #f6f4f4;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5);

  position: fixed;
  top: 0;
  z-index: 5;
  transition: 250ms;
  opacity: ${(props) => (props.scroll > 40 ? 1 : 0)};
  pointer-events: ${(props) => (props.scroll > 40 ? 'default' : 'none')};
`;

export const RightElements = styled.div`
  button {
    cursor: pointer;
    border: none;
    transition: 500ms;
    &:hover {
      transform: scale(1.2);
    }
  }
`;
