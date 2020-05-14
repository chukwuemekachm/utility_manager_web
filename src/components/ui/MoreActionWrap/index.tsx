import * as React from 'react';
import Button from 'components/ui/Button';
import { BRAND_WHITE } from 'settings/__color';
import MoreAction from 'components/ui/MoreAction';

export interface MoreActionWrapProps {
  handleClick?: React.ReactEventHandler;
  blurHandler: React.ReactEventHandler;
}

function MoreActionWrap({ blurHandler }: MoreActionWrapProps): React.ReactElement<MoreActionWrapProps> {
  return (
    <MoreAction handleBlur={blurHandler}>
      <Button inverted borderColor={BRAND_WHITE} type="submit" disabled={false}>
        Edit
      </Button>
      <Button inverted borderColor={BRAND_WHITE} type="submit" disabled={false}>
        Delete
      </Button>
    </MoreAction>
  );
}

export default MoreActionWrap;
