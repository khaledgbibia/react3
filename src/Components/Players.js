import React from "react";
import { Card } from "react-bootstrap";

const Players = ({ userInfo }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={userInfo.imageUrl} />
        <Card.Body>
          <Card.Title> {userInfo.name} </Card.Title>
        </Card.Body>
        {userInfo.equipe}
        <br/>
        {userInfo.numero}
        <br/>
        {userInfo.age}
        <br/>
        {userInfo.nationalite}
      </Card>
    </div>
  );
};
export default Players; 
