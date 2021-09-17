import React from 'react';
import styled from 'styled-components';

const TechWrapper = styled.div`
  opacity: 75%;
  font-size: 13px;
  margin-bottom: 25px;
  span {
    padding-right: 5px;
    display: inline-block;
  }
  @media (min-width: 992px) {
    margin-bottom: 10px;
  }
`;

export default function ListTechnologies({ tags }) {
  return (
    <TechWrapper>
      {tags.map((tag) => (
        <span key={tag.id}>#{tag.text.replace(' ', '')}</span>
      ))}
    </TechWrapper>
  );
}
