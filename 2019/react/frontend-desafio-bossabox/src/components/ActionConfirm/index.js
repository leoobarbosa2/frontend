import React from 'react';

import { Container, Actions } from './styles';

export default function ActionConfirm({ children }) {
  return (
    <Container>
      <Actions>{children}</Actions>
    </Container>
  );
}
