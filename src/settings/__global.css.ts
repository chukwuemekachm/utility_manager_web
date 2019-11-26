import { css } from '@emotion/core';

import { BRAND_WHITE, BLACK } from 'settings/__color';

export default css`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Fira Sans', sans-serif;
    background: ${BRAND_WHITE};
  }

  * {
    box-sizing: border-box;
  }
`;
