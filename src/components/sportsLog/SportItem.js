import classes from './SportItem.module.css';

const SportItem = props => {
    const sportItemClass = `${classes.div}`
    return (
        <div className={sportItemClass}>
            {props.item}
        </div>
    );
}

export default SportItem;