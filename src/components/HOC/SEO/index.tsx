import * as React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title: string;
}

export default function SEO({ title }: SEOProps): React.ReactElement<SEOProps> {
  return (
    <Helmet>
      <title>{title} | Utility Manager</title>
    </Helmet>
  );
}
