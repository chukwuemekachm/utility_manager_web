import * as React from 'react';
import styled from '@emotion/styled';
import {connect} from 'react-redux'
import __spacing from 'settings/__spacing';
import __layouts from 'settings/__layouts';
import { BRAND_PRIMARY, BRAND_WHITE } from 'settings/__color';
import { fontWeights , fontSizes} from 'settings/__fonts';

const EMAIL_IMAGE = "https://trello-attachments.s3.amazonaws.com/5db1b02b5b9a3e413fb742f2/5ddd0139b88cae26568ed400/ac49" +
    "dbf3c29bc291362a3ca14c393b77/undraw_Mail_sent_qwwx.svg";

function EmailSentSuccess({navigationData}) {
    const SIGNUP_MESSAGE =  `Hi ${navigationData.userData.firstName} your signup was  successful and a verification
        mail was sent to your email. Please confirm your email to continue`;
     const RESET_PASSWORD_MESSAGE =
         `Hi there! Instructions to reset your password has been sent to your email.
         Please check it out to reset your password thanks!`;
  return (
    <EmailSentSuccess.Wrapper>
        <EmailSentSuccess.Image />
        <p>
            {
                navigationData.authSuccessType == 'SIGN_UP'?
                    SIGNUP_MESSAGE: RESET_PASSWORD_MESSAGE
            }

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
        font-family: sans-serif;
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

const mapStateToProps = state =>({
    navigationData: state.navigation.data,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(EmailSentSuccess);
