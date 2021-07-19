import React from 'react';

export default function ListTechnologies({tags}) {
  return tags.map((tag) => <span key={tag.id}>#{tag.text}</span>);
}
