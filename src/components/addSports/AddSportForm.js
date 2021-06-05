import classes from "./AddSportForm.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const AddSportForm = (props) => {
  const buttonChangeHandler = (value) => {
    console.log('clicked')
    // props.addSport(value);
  };
  return (
    <div className={classes.div}>
      <Input />
      <Button onClick={buttonChangeHandler} title="Click" />
    </div>
  );
};

export default AddSportForm;
