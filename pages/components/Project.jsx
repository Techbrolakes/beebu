import React from "react";
import { Card } from "react-bootstrap";

const Project = ({ img, service }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }} className="text-center space-y-4">
        <Card.Img
          variant="top"
          src={img}
          className="rounded-md h-56 w-48 mx-auto"
        />
        <Card.Body>
          <Card.Title className="text-3xl">{service}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Project;
