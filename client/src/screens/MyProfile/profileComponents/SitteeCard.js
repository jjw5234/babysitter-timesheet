import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card } from 'antd';

const Header = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`;

const StyledCard = styled(Card)`
flex: 0 0 28%;
:not(:last-child) {
    margin: 1rem 1rem 1rem 0rem;
}
margin: 1rem 0rem 1rem 0rem;
    .ant-card-head, .ant-card-body {
        display: flex;
        justify-content: center;
    }
`;

const SitteeCard = ({ sitteeName, gender, children }) => (
  <StyledCard title={(
    <Header>
      <div>{gender === 'MALE' ? '👦' : '👧'}</div>
      <div>{sitteeName}</div>
    </Header>
  )}
  >
    {children}

  </StyledCard>
);

SitteeCard.propTypes = {
  sittee: PropTypes.string,
};

export default SitteeCard;
