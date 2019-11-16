import * as React from 'react';
import styled from '@emotion/styled';
import __spacing from 'settings/__spacing';
import { fontSizes, fontWeights } from 'settings/__fonts';
import { BRAND_PRIMARY, BRAND_WHITE, BRAND_PRIMARY_HOVER } from 'settings/__color';
import Loader from 'components/ui/Loader';

type ButtonType = "submit" | 'button' | 'reset'
interface ButtonProps {
type: ButtonType,
value: string,
isLoading: boolean
}

function Button (props: ButtonProps){
const {type= "submit", value, isLoading } = props;
return (
<Button.Wrapper>
  {!isLoading ? <button type={type} disabled={isLoading}>{value}</button> :
    <Loader  size='small' />}

</Button.Wrapper>
)
}

Button.Wrapper = styled.div`
background: ${BRAND_PRIMARY};
padding: 0;
display: flex;
align-items: center;
justify-content:center;
height: 2.5em;
width: 100%;
button {
  height: 100%;
  width: 100%;
    padding: 0 50%;
    text-align: center; 
    padding: ${__spacing.normal};
    font-size: ${fontSizes.small};
    font-weight: ${fontWeights.bold};
    border: none;
    background: ${BRAND_PRIMARY};
    color: ${BRAND_WHITE};
    border-radius: 3px;
    box-shadow: rgba(153, 153, 153, 0.1) 0px 0.32em 2em;

    &:focus {
      outline: none;
    }

    &:hover {
      cursor: pointer;
      background: ${BRAND_PRIMARY_HOVER};
    }
  }`;

  export default Button
