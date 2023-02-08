import React from 'react'
import {  Row, Col } from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


const ProductCard = ({product,addProductToCart}) => {

  return (
     <Col style={{marginTop: "45px"}}>
     <Card>
        <CardImg top width="100%" src={product.image} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{product.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{product.category} </CardSubtitle>
         <CardSubtitle tag="h6" className="mb-2 text-muted">${product.price} </CardSubtitle>

          <Button onClick={() => addProductToCart(product) }>Buy</Button>
        </CardBody>
      </Card>
      </Col>
       
  )
}

export default ProductCard