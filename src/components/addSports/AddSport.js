import classes from "./AddSport.module.css";
import Card from "../UI/Card/Card";
import AddSportForm from "./AddSportForm";
const AddSport = (props) => {
  const handlerSportAdd = sport => {
      props.addSport(sport);
  }
  return (
    <div className={classes.div}>
      <Card className={classes.card}>
        <AddSportForm addSport={handlerSportAdd} />
      </Card>
    </div>
  );
};

export default AddSport;
