import * as React from 'react';
import styled from '@emotion/styled';
import { BRAND_PRIMARY } from 'settings/__color';
import { fontSizes } from '../../../settings/__fonts';

interface ReadMoreDivsProps {
  showMore: boolean;
}

interface ReadMoreProps {
  children: React.ReactNode;
  caption?: {
    0: string;
    1: string;
  };
}

export default function ReadMore(props: ReadMoreProps) {
  const defaultCaption = {
    0: 'Show More',
    1: 'Show Less',
  };
  const { children, caption = defaultCaption } = props;
  const [showMore, setShowMore] = React.useState(false);
  function handleClick() {
    setShowMore(!showMore);
  }
  return (
    <div>
      <ReadMore.Wrapper showMore={showMore}>{children}</ReadMore.Wrapper>
      <ReadMore.ShowMore onClick={handleClick}>{caption[+showMore]}</ReadMore.ShowMore>
    </div>
  );
}

ReadMore.ShowMore = styled.div`
  text-align: center;
  color: ${BRAND_PRIMARY};
  cursor: pointer;
  font-weight: bold;
  font-size: ${fontSizes.normal};
  text-transform: uppercase;
  &:hover {
    text-decoration: underline;
  }
`;

ReadMore.Wrapper = styled.p<ReadMoreDivsProps>`
  line-height: 1.58;
  letter-spacing: -0.004em;
  word-break: break-word;
  max-height: 4.75em;
  overflow-y: hidden;
  transition: max-height 0.8s linear;
  text-align: justify;
  ${props =>
    props.showMore &&
    `
   max-height: 56.25em;
  `}
`;
