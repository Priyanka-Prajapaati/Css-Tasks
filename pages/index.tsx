import React from "react";
import Button from "./designSystem/atoms/Button";
import Cards from "./designSystem/atoms/cards";
import Input from "./designSystem/atoms/Input";
import Label from "./designSystem/atoms/Label";

const Home = () => {
  return (
    <div>
      <Label>Your Name:</Label>
      <Input text="Your Name Please"></Input>
      <Button type="danger" size="md">Submit</Button>
      <Cards type="service" title="title" body="body" />
    </div>
  );
};

export default Home;
