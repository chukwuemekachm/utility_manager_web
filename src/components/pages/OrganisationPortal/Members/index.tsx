import * as React from 'react';
import NavigationLayout from 'components/layouts/NavigationLayout';
import { OrgPortalProps } from '../index';

type MembersProps = OrgPortalProps;

export default function Members(props: MembersProps) {
  const {
    match: { params },
  } = props;

  const sampleImage =
    'https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80';

  return <div>Organisation Portal Members</div>;
}
