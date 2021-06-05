import classes from "./AddSportForm.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import { createRef } from "react";

const AddSportForm = (props) => {
  const inputControl = createRef();
  const buttonChangeHandler = () => {
    props.addSport(inputControl.current.value);
  };
  return (
    <div className={classes.div}>
      <Input ref={inputControl} />
      <Button onClick={buttonChangeHandler} title="Click" />
    </div>
  );
};

export default AddSportForm;
