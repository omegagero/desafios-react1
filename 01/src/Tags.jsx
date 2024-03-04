import Badge from 'react-bootstrap/Badge';

const Bacha = ({ colorButton, textButton }) => {
   
  return (
    <Badge bg={colorButton} style={{ width: '100%' }}>{textButton}</Badge>
  );
};

export default Bacha;
