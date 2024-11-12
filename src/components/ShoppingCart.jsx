import { Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "./context/ShopingCartContext"
import Cartitem from "./Cartitem";


const ShoppingCart = ({isOpen }) => {
    const { cartItem, closeCart } = useShoppingCart();
    const {  getCartTotal } = useShoppingCart();
  return (
      <Offcanvas show={isOpen} onHide={closeCart} placement="end">
          
          <Offcanvas.Header closeButton >
              
              <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
              <Stack gap={4}>
              {cartItem.map((item) => { 
                  return (
                      <Cartitem key={item.id} {...item} />
                  )
              })}
                  


                  <div className="mt-3">
<h5> {getCartTotal()} $ total </h5>
</div>
                  
              </Stack>
           
          </Offcanvas.Body>

    </Offcanvas>
  )
}

export default ShoppingCart