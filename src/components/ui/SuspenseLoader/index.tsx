import * as React from 'react';
import styled from '@emotion/styled';
import { BRAND_PRIMARY } from '../../../settings/__color';
import Logo from '../Logo';

const SuspenseLoader = () => {
  return (
    <SuspenseLoader.Wrapper>
      <div className="circle">
        <Logo hasText={false} />
      </div>
    </SuspenseLoader.Wrapper>
  );
};
SuspenseLoader.Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: traslate(-50%, -50%);
    display: flex;
    width: 60px;
    height: 60px;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    background-color: transparent;
    h2 {
      i {
        margin: 0 auto;
      }
    }
  }
  .circle:before,
  .circle:after {
    content: '';
    display: block;
    position: absolute;
    border: 1px solid ${BRAND_PRIMARY};
    border-radius: 50%;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    animation: animate 1.3s linear infinite;
    opacity: 0;
    backface-visibility: hidden;
  }
  .circle:after {
    animation-delay: 0.5s;
  }
  @keyframes animate {
    0% {
      transform: scale(0.5);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: scale(1.2);
    }
  }
`;
export default SuspenseLoader;
