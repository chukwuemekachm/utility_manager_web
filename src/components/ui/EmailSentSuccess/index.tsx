import * as React from 'react';
import styled from '@emotion/styled';
import __spacing from 'settings/__spacing';
import __layouts from 'settings/__layouts';
import { fontSizes, fontWeights} from 'settings/__fonts';
import { GRAY, BRAND_PRIMARY } from 'settings/__color';

const EMAIL_IMAGE = "https://trello-attachments.s3.amazonaws.com/5db1b02b5b9a3e413fb742f2/5ddd0139b88cae26568ed400/ac49" +
    "dbf3c29bc291362a3ca14c393b77/undraw_Mail_sent_qwwx.svg";

function EmailSentSuccess({ message }) {
  return (
    <EmailSentSuccess.Wrapper>
        <EmailSentSuccess.Image />
        <p>
            {  message }
        </p>

    </EmailSentSuccess.Wrapper>
  );
}

EmailSentSuccess.Image = styled.div`
    height: 50%;
    width: 60%;
    margin: 0;
    margin-top: 25%;
    background-image: url(${EMAIL_IMAGE});
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
     @media (max-width: ${__layouts.xSm}) and  (max-height: ${__layouts.xSm}){
           width: 100%;
           background-size: fill;
           margin-top: ${__spacing.small};
      }
    
`;


EmailSentSuccess.Wrapper = styled.div`
    height: 100%;
   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-weight:light;
    p{
        text-align:center;
        margin-top:0;
        color: ${BRAND_PRIMARY};
        font-size: ${fontSizes.normal};
         font-weight: ${fontWeights.bold};
        
    }
    
    
      @media (min-width: ${__layouts.md}) and (max-width: ${__layouts.xLg}) {
            p{
                font-size: ${fontSizes.large};
                width: 70%;
            }
      }
      
      @media (max-width: ${__layouts.xSm}) {
           
           font-size: ${fontSizes.small};
      }
      
     
`;

export default EmailSentSuccess;
