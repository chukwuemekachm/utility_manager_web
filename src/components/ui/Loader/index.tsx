import * as React from 'react';
import styled from '@emotion/styled';

import __spacing from 'settings/__spacing';
import { BRAND_PRIMARY, BRAND_WHITE } from 'settings/__color';
export type LoaderSize = 'small' | 'large';

interface LoaderProps {
  size: LoaderSize;
}

type LoaderWrapperProps = {
  size: string;
};
export default function Loader({ size }: LoaderProps) {
  return (
    <Loader.Wrapper size={size}>
      <div className="loader" />
    </Loader.Wrapper>
  );
}

Loader.Wrapper = styled.div`
  padding: ${__spacing.small};
  .loader {
    border: 3px solid ${BRAND_WHITE};
    border-top: 3px solid ${BRAND_PRIMARY};
    border-right: 3px solid ${BRAND_PRIMARY};
    border-radius: 50%;
    width: ${(props: LoaderWrapperProps) => (props.size === 'small' ? '20px' : '150px')};
    height: ${(props: LoaderWrapperProps) => (props.size === 'small' ? '20px' : '150px')};
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
