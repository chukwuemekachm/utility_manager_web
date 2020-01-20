import * as React from 'react';
import styled from '@emotion/styled';

import __spacing from 'settings/__spacing';
import { BRAND_PRIMARY, BRAND_WHITE } from 'settings/__color';

export type LoaderSize = 'SMALL' | 'LARGE';

export interface LoaderProps {
  size: LoaderSize;
}

type LoaderComponentProps = {
  size: string;
};

export default function Loader({ size }: LoaderProps): React.ReactElement<LoaderProps> {
  return (
    <Loader.Wrapper>
      <Loader.Component size={size} />
    </Loader.Wrapper>
  );
}

Loader.Wrapper = styled.div`
  padding: ${__spacing.small};
`;

Loader.Component = styled.div<LoaderComponentProps>`
  border: 3px solid ${BRAND_WHITE};
  border-top: 3px solid ${BRAND_PRIMARY};
  border-right: 3px solid ${BRAND_PRIMARY};
  border-radius: 50%;
  width: ${(props: LoaderComponentProps): string => (props.size === 'SMALL' ? '20px' : '150px')};
  height: ${(props: LoaderComponentProps): string => (props.size === 'SMALL' ? '20px' : '150px')};
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
