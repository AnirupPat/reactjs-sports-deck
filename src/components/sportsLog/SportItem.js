import classes from './SportItem.module.css';

const SportItem = props => {
    const sportItemClass = `${props.className} ${classes.div}`
    return (
        <div className={sportItemClass}>
            {props.item}
        </div>
    );
}

export default SportItem;