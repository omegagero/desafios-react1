import Card from 'react-bootstrap/Card';
import Bacha from './Tags';
import Boton from './Boton';


const MyCard = ({image, title, text, colorButton, textButton}) => {
return (
<div className="my-card">
<Card style={{ width: "18rem" }}>
<Card.Img variant="top" src={image}/>
<div className="card-body-container">
<Card.Body>
<Card.Title>{title}</Card.Title>
<Card.Text>{text}</Card.Text>
</Card.Body>
<div style={{marginTop: "auto"}}>
{/* <Boton colorButton={colorButton} textButton={textButton} />  */}
<Bacha colorButton={colorButton} textButton={textButton}/>
</div>
</div>
</Card>
</div>
);
};
export default MyCard;
