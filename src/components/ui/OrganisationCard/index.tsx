import * as React from 'react';
import { DARK_GRAY } from 'settings/__color';
import { fontSizes } from 'settings/__fonts';
import __layouts from 'settings/__layouts';
import styled from '@emotion/styled';

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
        <div className="organisation-image">
          <img src={img} alt="organisation image" />
        </div>
        <div className="organisation-name">
          <h2>{name}</h2>
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

OrganisationCard.Wrapper = styled.div`
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
`;

OrganisationCard.Content = styled.section`
  width: 95vw;
  display: flex;
  height: 33vh;

  .organisation-image {
    height: 100%;
    width: 28vw;
    margin-right: 20px;
    overflow: hidden;

    img {
      height: 100%;
    }
  }
  .organisation-name {
    padding: 0 10px;
    margin-right: 20px;
  }

  .organisation-role {
    line-height: 12px;
  }

  p {
    color: ${DARK_GRAY};
  }
  @media (max-width: ${__layouts.xLg}) {
    height: 16vh;
  }

  @media (max-width: ${__layouts.sm}) {
    width: 100vw;
    height: 16vh;
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
      margin: 2% 0;
    }
  }

  @media (max-width: ${__layouts.xSm}) {
    height: 19vh;
  }
`;
