import classes from "./AddSportForm.module.css";
import Input from '../UI/Input/Input';

const AddSportForm = (props) => {
  const inputChangeHandler = value => {
    props.addSport(value);
  }
  return (
    <div>
    <Input />
    </div>
  );
};

export default AddSportForm;
