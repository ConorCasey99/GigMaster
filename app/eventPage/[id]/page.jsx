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
      eventDate: "12-09-26",
      saleDate: "23-10-25",
      description: "Another legendary performance by The Stone Roses.",
      venue: "O2 Arena",
      imageUrl: "https://audioxide.com/api/images/album-artwork/the-stone-roses-the-stone-roses-medium-standard.jpg",
    },
    {
      id: "B09123F4QN",
      artistName: "The Stone Roses3",
      eventDate: "12-09-27",
      saleDate: "23-10-26",
      description: "The Stone Roses take the stage yet again!",
      venue: "Wembley Stadium",
      imageUrl: "https://audioxide.com/api/images/album-artwork/the-stone-roses-the-stone-roses-medium-standard.jpg",
    },
    {
      id: "B0912dc2FV",
      artistName: "AC/DC",
      eventDate: "12-10-01",
      saleDate: "23-10-15",
      description: "AC/DC rocking out with a power-packed performance.",
      venue: "Sydney Opera House",
      imageUrl: "https://i.etsystatic.com/14980242/r/il/eb1ec7/3969937145/il_fullxfull.3969937145_p9i9.jpg",
    },
    {
      id: "D09123N2FV",
      artistName: "Linkin Park",
      eventDate: "12-10-05",
      saleDate: "23-10-18",
      description: "Linkin Park returns for a special concert event.",
      venue: "Staples Center",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/2/2a/Linkin_Park_Hybrid_Theory_Album_Cover.jpg",
    },
    {
      id: "E09123F4QN",
      artistName: "Coldplay",
      eventDate: "12-11-15",
      saleDate: "23-11-01",
      description: "Coldplay delivers a breathtaking performance under the stars.",
      venue: "Wembley Stadium",
      imageUrl: "https://example.com/coldplay-image.jpg",
    },
    {
      id: "F09123F4QN",
      artistName: "Taylor Swift",
      eventDate: "12-12-05",
      saleDate: "23-11-15",
      description: "Taylor Swift's Eras Tour is here for a magical evening.",
      venue: "Madison Square Garden",
      imageUrl: "https://example.com/taylorswift-image.jpg",
    },
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
