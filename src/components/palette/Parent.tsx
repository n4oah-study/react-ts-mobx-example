import React, { useContext } from 'react';
import {
  Container,
  Row
} from 'reactstrap';
import { PaletteContext } from '../../context/PaletteContext';
import Child from './Child';

const Parent: React.FC = () => {
  const palette = useContext(PaletteContext);

  return (
    <div>
      <p>{palette.name}</p>
      <Child></Child>
    </div>
  )
};

export default Parent;