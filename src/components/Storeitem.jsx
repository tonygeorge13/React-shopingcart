import { Button, Card } from "react-bootstrap";
import data from "./data";
import {useShoppingCart} from '../components/context/ShopingCartContext';
const Storeitem = ({ id, price, name, imgUrl }) => {

  const {getItemsQuantity ,increaseQuantity , decreaseQuantity , removeitem} = useShoppingCart()

    const quantity = getItemsQuantity(id);
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl} 
        style={{ height: "400px", objectFit: "cover" }}
      />
      <Card.Body>
              <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                  
              <span>{name}</span>
              <span>Price: ${price}</span>

              </Card.Title>
              <div>
                  {quantity === 0 ? <Button className="w-100" onClick={() => increaseQuantity(id)}>add to cart</Button> : <div className="d-flex align-items-center flex-column gap-3">
                  
                      <div className="d-flex align-items-center justify-content-center">
                          <Button onClick={() => increaseQuantity(id)}  >+</Button>
                          <span style={{marginInline:"20px"}}> {quantity} </span>
                      <Button onClick={() => decreaseQuantity(id)}>-</Button>
                  </div>
                  <Button   onClick={() => removeitem(id)}   >remove</Button>
                  
                  
                  
                  
                  
                  
                  
                  </div>}
              </div>
       
      </Card.Body>
    </Card>
  );
};

export default Storeitem;
