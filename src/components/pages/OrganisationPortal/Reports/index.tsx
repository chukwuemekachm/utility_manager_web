import * as React from 'react';
import { OrgPortalHeading } from 'components/layouts/NavigationLayout';
import OrganisationPortal, { OrgPortalProps } from '../index';

OrganisationPortal;
type ChartsProps = OrgPortalProps;

export default function Reports(props: ChartsProps) {
  return (
    <div>
      <OrgPortalHeading>Reports</OrgPortalHeading>
      <div>Organisation Portal Reports</div>
    </div>
  );
}
