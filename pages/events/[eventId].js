import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';
import { Fragment } from 'react';
import EventSummary from '../../components/event-detail/event-summary';
import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';

function EventDetalPage() {
  const router = useRouter();

  const eventID = router.query.eventID;
  const event = getEventById(eventID);

  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.address}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetalPage;
