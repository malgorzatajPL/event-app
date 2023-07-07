import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';

function EventDetalPage() {
  const router = useRouter();

  const eventID = router.query.eventID;
  const event = getEventById(eventID);

  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <div>
      <h1>The events detail</h1>
    </div>
  );
}

export default EventDetalPage;
