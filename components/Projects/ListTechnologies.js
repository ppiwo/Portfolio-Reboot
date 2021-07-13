import React from 'react';

export default function ListTechnologies({ tags }) {
  return tags.map((tag, index) => <span key={index}>#{tag.text}</span>);
}
