import * as React from 'react';
import { OrgPortalHeading } from 'components/layouts/NavigationLayout';
import { OrgPortalProps } from '../index';
import StickyContent from 'components/ui/StickyContent';
type ChartsProps = OrgPortalProps;

export default function Charts(props: ChartsProps) {
  return (
    <StickyContent>
      <OrgPortalHeading>Charts</OrgPortalHeading>
      <div>Organisation Portal Charts</div>
    </StickyContent>
  );
}
