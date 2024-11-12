import { Col, Row } from "react-bootstrap";

import Storeitem from "./Storeitem";
import data from "./data";

const Store = () => {
  return (
    <>
      <h1>store</h1>

      <Row md={2} xs={1} lg={3} className="g-3">
        {data.map((item) => (
          <Col key={item.id}>
            <Storeitem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
