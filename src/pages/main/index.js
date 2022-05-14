import React, {useState, useEffect} from 'react';
import Card from '../../components/card/card';
import BelajarPosition from '../../components/position/BelajarPosition';
import SvgTest from '../../components/svg';

const Main = ({navigation}) => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Crud');
    }, 5000);
  });
  return (
    <>
      <Card click={() => setQuantity(quantity + 1)} />
      <BelajarPosition quantity={quantity} />
      <SvgTest />
    </>
  );
};
export default Main;
