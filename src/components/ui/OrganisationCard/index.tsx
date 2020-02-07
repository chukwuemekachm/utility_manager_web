import * as React from 'react';
import styled from '@emotion/styled';

import { DARK_GRAY, BRAND_WHITE } from 'settings/__color';
import { fontSizes } from 'settings/__fonts';
import __layouts from 'settings/__layouts';

export interface OrganisationCardProps {
  img: string;
  name: string;
  role: string;
  date: string;
}

export default function OrganisationCard(props: OrganisationCardProps): React.ReactElement<OrganisationCardProps> {
  const { img, name, role, date } = props;
  return (
    <OrganisationCard.Wrapper>
      <OrganisationCard.Content>
        <OrganisationCard.ImageWrapper>
          <OrganisationCard.Image src={img} alt="organisation image" />
        </OrganisationCard.ImageWrapper>
        <div className="organisation-name">
          <h3>{name}</h3>
          <div className="organisation-role">
            <div>
              <div className="role">
                <p>
                  <i className="icon ion-ios-person" /> &nbsp; {role}
                </p>
              </div>
              <div className="date">
                <p className="move-up">
                  <i className="icon ion-md-calendar" /> &nbsp; {date}
                </p>
              </div>
            </div>
          </div>
        </div>
      </OrganisationCard.Content>
    </OrganisationCard.Wrapper>
  );
}

OrganisationCard.Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
OrganisationCard.ImageWrapper = styled.div`
  height: 100%;
  width: 28vw;
  margin-right: 20px;
  overflow: hidden;
`;

OrganisationCard.Wrapper = styled.article`
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  margin: 5% 0;
  width: 100%;
  background-color: ${BRAND_WHITE};
`;

OrganisationCard.Content = styled.div`
  width: 95vw;
  display: flex;
  height: 33vh;

  .organisation-name {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .organisation-name-sub {
    height: 100%;
    padding: 0;
  }

  .organisation-role {
    height: 70%;
    line-height: 12px;
  }

  p {
    color: ${DARK_GRAY};
  }
  @media (max-width: ${__layouts.xLg}) {
    height: 16vh;
  }

  @media (max-width: ${__layouts.sm}) {
    width: 100%;
    height: 19vh;
    p {
      font-size: ${fontSizes.small};
    }

    h2 {
      font-size: ${fontSizes.small};
    }

    .organisation-image {
      height: 100%;
      width: 30vw;
      overflow: hidden;

      img {
        height: 100%;
      }
    }

    .organisation-role p {
      line-height: 5px;
    }
    .move-up {
      margin-top: -2%;
    }

    .organisation-name {
      margin: 0;
    }
  }

  @media (max-width: ${__layouts.xSm}) {
    height: 19vh;
  }
`;
