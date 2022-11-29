import React from 'react';

const Child = props => {
  return (
    <>
      {props.pet.map(artists => (
        <li key={artists.id}>
          <span className="boldName">user</span>
          {artists.name}
          <span className="heartAdd">❤️</span>
          <span className="delete">❌</span>
        </li>
      ))}
    </>
  );
};

export default Child;
