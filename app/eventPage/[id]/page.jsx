import { use } from 'react';

// Simulated function to fetch event data based on `id`
async function getEventData(id) {
  // Mock event data
  const events = [
    {
      id: "B09123N2QN",
      artistName: "The Stone Roses",
      eventDate: "12-09-25",
      saleDate: "23-10-24",
      description: "A legendary performance by The Stone Roses.",
      venue: "Madison Square Garden",
      imageUrl: "https://audioxide.com/api/images/album-artwork/the-stone-roses-the-stone-roses-medium-standard.jpg",
    },
    {
      id: "B09123N2FV",
      artistName: "The Stone Roses2",
      eventDate: "12-09-25",
      saleDate: "23-10-24",
      description: "A legendary performance by The Stone Roses.",
      venue: "Madison Square Garden",
      imageUrl: "https://audioxide.com/api/images/album-artwork/the-stone-roses-the-stone-roses-medium-standard.jpg",
    },
    {
      id: "B09123F4QN",
      artistName: "The Stone Roses3",
      eventDate: "12-09-25",
      saleDate: "23-10-24",
      description: "A legendary performance by The Stone Roses.",
      venue: "Madison Square Garden",
      imageUrl: "https://audioxide.com/api/images/album-artwork/the-stone-roses-the-stone-roses-medium-standard.jpg",
    },
    // More events can be added here
  ];

  return events.find(event => event.id === id);
}

export default async function EventPage({ params }) {
  const { id } = params;
  const event = await getEventData(id);

  if (!event) {
    return <h1>Event not found</h1>;
  }

  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <img
          alt={event.artistName}
          className="lg:w-1/2 w-full object-cover object-center rounded"
          src={event.imageUrl}
        />
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{event.artistName}</h1>
          <p className="leading-relaxed">{event.description}</p>
          <p className="mt-3">Event Date: {event.eventDate}</p>
          <p className="mt-1">Venue: {event.venue}</p>
          <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
            <span className="text-gray-600">Sale Date: {event.saleDate}</span>
          </div>
          <div className="flex">
            <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
              Buy Tickets
            </button>
            <a href="/" className="ml-4 text-gray-500">Back to Events</a>
          </div>
        </div>
      </div>
    </div>
  );
}
