import * as React from 'react';
import styled from '@emotion/styled';
import Icon from 'components/ui/Icon';
import Loader from 'components/ui/Loader';
import __spacing from 'settings/__spacing';
import { fontSizes, fontWeights } from 'settings/__fonts';
import { BRAND_PRIMARY, BRAND_WHITE, BRAND_PRIMARY_HOVER, LIGHT_GRAY, WHITE_SMOKE } from 'settings/__color';
import convertFromPixelsToRem from 'utils/misc';

export type ButtonType = 'submit' | 'button' | 'reset';

export interface ButtonProps {
  type?: ButtonType;
  children: React.ReactNode;
  isLoading: boolean;
  handleClick?: React.EventHandler<React.SyntheticEvent>;
  disabled: boolean;
  leftIcon?: string;
  rightIcon?: string;
  inverted?: boolean;
  leftIconColor?: string;
}

function Button(props: ButtonProps): React.ReactElement<ButtonProps> {
  const {
    inverted = false,
    type = 'submit',
    children,
    isLoading,
    handleClick,
    disabled = false,
    leftIcon,
    rightIcon,
    leftIconColor = BRAND_PRIMARY,
  } = props;

  return (
    <Button.Wrapper>
      {!isLoading ? (
        <>
          <Button.Component inverted={disabled || inverted} type={type} onClick={handleClick} disabled={disabled}>
            {leftIcon && (
              <div className="left-icon">
                <Icon
                  color={disabled ? 'WHITE' : leftIconColor || (inverted ? 'BLUE' : 'WHITE')}
                  iconType={leftIcon}
                  size="LARGE"
                />
              </div>
            )}
            <div>{children}</div>

            {rightIcon && (
              <div className="right-icon">
                <Icon color={disabled ? 'WHITE' : inverted ? 'BLUE' : 'WHITE'} iconType={rightIcon} size="LARGE"></Icon>
              </div>
            )}
          </Button.Component>
        </>
      ) : (
        <Loader size="SMALL" />
      )}
    </Button.Wrapper>
  );
}

Button.Wrapper = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5em;
  width: 100%;
  border-radius: ${convertFromPixelsToRem(3)};
  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1); */
`;

Button.Component = styled.button<Pick<ButtonProps, 'inverted' | 'disabled'>>`
  height: 100%;
  width: 100%;
  padding: 0;
  text-align: center;
  font-size: ${fontSizes.small};
  font-weight: ${fontWeights.bold};
  border: ${props => (props.disabled || !props.inverted ? 'none' : 'solid')} 1px ${BRAND_PRIMARY};
  background: ${props => (props.inverted ? BRAND_WHITE : BRAND_PRIMARY)};
  color: ${props => (props.disabled ? BRAND_WHITE : props.inverted ? BRAND_PRIMARY : BRAND_WHITE)};
  border-radius: ${convertFromPixelsToRem(3)};
  box-shadow: ${props => !props.inverted && '0px 4px 4px rgba(0, 0, 0, 0.1)'};
  display: flex;
  justify-content: center;
  align-items: center;
  .left-icon {
    margin-right: 5px;
  }

  .right-icon {
    margin-left: 5px;
  }
  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
    background: ${props => (props.inverted ? WHITE_SMOKE : BRAND_PRIMARY_HOVER)};
  }

  &:disabled {
    background-color: ${LIGHT_GRAY};
  }
`;

export default Button;
