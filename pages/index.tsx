import React from "react";
import Button from "./designSystem/atoms/button";
import Input from "./designSystem/atoms/input";
import Label from "./designSystem/atoms/label";

const Home = () => {
  return (
    <div>
      <Label>Your Name:</Label>
      <Input>Your Name Please</Input>
      <Button type="danger" size="md">Submit</Button>
    </div>
  );
};

export default Home;
