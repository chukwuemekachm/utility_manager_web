import * as React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

import Icon from 'components/ui/Icon';
import { fontSizes } from 'settings/__fonts';
import __spacing from 'settings/__spacing';
import { notificationConstants, hideNotification } from 'store/actions/notification';
import { BRAND_WHITE } from 'settings/__color';

export interface SnackBarProps {
  isNotificationOpen: boolean;
  type: string;
  message: string;
  duration: number;
  hideSnackBar: () => void;
}

const { NOTIFICATION_TYPES } = notificationConstants;

export function SnackBar(props: SnackBarProps): React.ReactElement<SnackBarProps> | null {
  const { isNotificationOpen, type = NOTIFICATION_TYPES.INFO, message, duration, hideSnackBar } = props;
  const notificationIconTypes = {
    [NOTIFICATION_TYPES.SUCCESS]: 'ios-checkmark-circle',
    [NOTIFICATION_TYPES.ERROR]: 'ios-close-circle',
    [NOTIFICATION_TYPES.INFO]: 'ios-alert',
  };

  React.useEffect(
    function() {
      if (isNotificationOpen) {
        setTimeout(function() {
          hideSnackBar();
        }, duration);
      }
    },
    [isNotificationOpen],
  );

  return isNotificationOpen ? (
    <SnackBar.Wrapper>
      <SnackBar.IconWrapper>
        <Icon size="LARGE" color={type} iconType={notificationIconTypes[type]} />
      </SnackBar.IconWrapper>
      <SnackBar.TextWrapper>{message}</SnackBar.TextWrapper>
    </SnackBar.Wrapper>
  ) : null;
}

SnackBar.Wrapper = styled.span`
  width: 300px;
  display: flex;
  align-items: center;
  padding: ${__spacing.medium};
  border-radius: 3px;
  background: ${BRAND_WHITE};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  position: absolute;
  bottom: ${__spacing.xLarge};
  opacity: 1;
  transition: opacity 150ms ease-in;
  -webkit-transition: opacity 150ms ease-in;
  animation: slidein 1500ms ease-in-out forwards;
  -webkit-animation: slidein 1500ms ease-in-out forwards;

  @keyframes slidein {
    from {
      right: -${__spacing.xxxLg};
    }

    to {
      right: ${__spacing.xLarge};
    }
  }
`;

SnackBar.IconWrapper = styled.span`
  margin-right: ${__spacing.small};
`;

SnackBar.TextWrapper = styled.span`
  font-size: ${fontSizes.normal};
`;

const mapStateToProps = (state): Omit<SnackBarProps, 'hideSnackBar'> => ({
  isNotificationOpen: state.notification.status.isOpen,
  type: state.notification.type,
  message: state.notification.message,
  duration: state.notification.duration,
});

const mapDispatchToProps = (dispatch): Pick<SnackBarProps, 'hideSnackBar'> => ({
  hideSnackBar: (): void => dispatch(hideNotification()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SnackBar);
