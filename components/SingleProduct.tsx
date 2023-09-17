import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";
import { useContext } from "react";
import {Cart} from "../Context/Context"

type props ={
    prod: {
        id: number;
        title: string;
        price: number;
        rate: number;
        image: string;
    }
}

const SingleProduct = ({prod}: props) => {

const { products, addToCart, removeFromCart } = useContext(Cart)



    return (
        <div className="products">
            <Card style={{width: "18rem"}}>
            <Card.Img variant="top" src={prod.image} alt={prod.title} className="img" />
            <Card.Body>
            <Card.Title>{prod.title}</Card.Title>
            <Card.Text>
                ${prod.price}
                <br />
                <Rating rate={prod.rate} style={undefined} onClick={function (i: number): void {
                            throw new Error("Function not implemented.");
                        } } />
            </Card.Text>
            { products.some((product: {id: number}) => product.id === prod.id ) ?(
            <Button variant="danger" onClick={() => removeFromCart(prod)}>Remove from cart</Button>
           ) :(
            <Button onClick={() => addToCart(prod)} >Add to cart</Button>
           )}
            </Card.Body>
            </Card>
        </div>
    )
}
export default SingleProduct;