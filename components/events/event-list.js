import EventItem from "./event-item";
import classes from  './event-list.module.css';

export default  function EventList(props){
const {items} = props;
 return <>
    <ul className={classes.list}>
        {items.map((item, index) => <EventItem key={index} id={item.id} title={item.title} location={item.location} data={item.date} image={item.image} date={item.date} />)} 
    </ul>
 </>
}