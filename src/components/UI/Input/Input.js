import { forwardRef } from 'react';
import classes from "./Input.module.css";

const Input = forwardRef((props, ref) => {
  return (
    <div className={classes.control}>
      <label>Add Sport</label>
      <input ref={ref} />
    </div>
  );
});

export default Input;
