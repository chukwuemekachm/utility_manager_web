import * as React from 'react';
import styled from '@emotion/styled';

interface StickyContentProps {
  children: React.ReactNode;
}

function StickyContent(props: StickyContentProps) {
  const { children } = props;
  return <StickyContent.Wrapper>{children}</StickyContent.Wrapper>;
}

StickyContent.Wrapper = styled.div`
  position: sticky;
  top: 8%;
  padding-top: 2%;
  padding-bottom: 2%;
  background-color: white;
`;

export default StickyContent;
