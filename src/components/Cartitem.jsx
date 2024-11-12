import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "./context/ShopingCartContext";

import data from "./data";

const Cartitem = ({ id, quantity }) => {
  const item = data.find((item) => item.id === id);

  const { removeitem, getCartTotal } = useShoppingCart();
  if (item == null) return null;
  return (
    <Stack
      direction="horizontal"
      gap={5}
      className="d-flex align-items-center "
    >
      <img
        src={item.imgUrl}
        alt=""
        style={{ width: "120px", height: "80px ", objectFit: "cover" }}
      />

      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "10px" }}>
              {" "}
              x{quantity}
            </span>
          )}
        </div>

        <div className="text-muted" style={{ fontSize: "15px" }}>
          {item.price} $
        </div>
        <div>{item.price * quantity}$ total</div>
      </div>

      <Button
        className="btn btn-sm "
        onClick={() => {
          removeitem(id);
        }}
      >
        Remove
      </Button>
    </Stack>
  );
};

export default Cartitem;
