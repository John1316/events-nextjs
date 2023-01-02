import { useRouter } from "next/router"
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
export default function eventDeatilPage(){
    let router = useRouter();
    const eventId  = router.query.eventId;
    const event = getEventById(eventId) ; 
    console.log(event , eventId)
    if(!event){
        return <p>Not event found!</p>
    }
    return <>
        {/* Event details */}
        <EventSummary title={ event.title }/>
        <EventLogistics date={event.date} address={event.location} image={event.image}/>
        <EventContent>
            <p>{event.description}</p>
        </EventContent>
        
    </>
}