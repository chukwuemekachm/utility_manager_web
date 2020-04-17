import * as React from 'react';
import { OrgPortalHeading } from 'components/layouts/NavigationLayout';
import OrganisationPortal, { OrgPortalProps } from '../index';
import StickyContent from 'components/ui/StickyContent';

OrganisationPortal;
type ChartsProps = OrgPortalProps;

export default function Reports(props: ChartsProps) {
  return (
    <StickyContent>
      <OrgPortalHeading>Reports</OrgPortalHeading>
      <div>Organisation Portal Reports</div>
    </StickyContent>
  );
}
