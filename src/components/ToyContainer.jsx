import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  const toys= props.toys
  const renderToys= toys.map(toyE => <ToyCard toy={toyE}/>)

  return(
    <div id="toy-collection">
      {renderToys}
    </div>
  );
}

export default ToyContainer;
