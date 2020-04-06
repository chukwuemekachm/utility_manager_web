import * as React from 'react';
import { OrgPortalHeading } from 'components/layouts/NavigationLayout';
import { OrgPortalProps } from '../index';

type ChartsProps = OrgPortalProps;

export default function Charts(props: ChartsProps) {
  return (
    <div>
      <OrgPortalHeading>Charts</OrgPortalHeading>
      <div>Organisation Portal Charts</div>
    </div>
  );
}
