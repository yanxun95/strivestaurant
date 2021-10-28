import { Carousel, Col, Container, Row } from "react-bootstrap";
import dishesJson from "../data/menu.json";
import { useState, useEffect } from "react";
import DishComments from "./DishComments";
import upperName from "../helpers/lib";
import ISelectPasta from "../types/selectPasta";

interface HomeComponentProps {
  title: string;
}

const Home = ({ title }: HomeComponentProps) => {
  const [selected, setSelected] = useState<ISelectPasta | null>(null);
  const [dishes, setDishes] = useState<ISelectPasta[]>([]);

  const initDishes = () => {
    setDishes(dishesJson);
  };

  useEffect(() => {
    initDishes();
  }, []);

  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <Col xs={12} md={6}>
          <h1>Welcome to {upperName(title)}!</h1>
          <h3 className="text-center mb-4">We can only cook pasta...</h3>
          <Carousel>
            {dishes.map((dish, i) => (
              <Carousel.Item
                key={dish.id}
                onClick={() => {
                  setSelected(dish);
                }}
              >
                <img
                  className="d-block w-100"
                  src={dish.image}
                  alt={"slide number " + (i + 1)}
                />
                <Carousel.Caption>
                  <h3>{dish.name}</h3>
                  <p>{dish.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <DishComments selectedPasta={selected} />
      </Row>
    </Container>
  );
};

export default Home;
