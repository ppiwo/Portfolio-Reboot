import React from 'react';
import styled from 'styled-components';

const TechWrapper = styled.div`
  opacity: 75%;
  font-size: 13px;
  span {
    padding-right: 5px;
    display: inline-block;
  }
`;

export default function ListTechnologies({ tags }) {
  return (
    <TechWrapper>
      {tags.map((tag) => (
        <span key={tag.id}>#{tag.text}</span>
      ))}
    </TechWrapper>
  );
}
