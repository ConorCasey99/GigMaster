import Link from 'next/link';

export default function Page() {
  const upcomingFeed = [
    {
      id: "B09123N2QN",
      artistName: "The Stone Roses",
      eventDate: "12-09-25",
      saleDate: "23-10-24",
      artistIcon: "https://audioxide.com/api/images/album-artwork/the-stone-roses-the-stone-roses-medium-standard.jpg",
      location: "Dublin",
    },
    {
      id: "B0912dc2FV",
      artistName: "ACDC",
      eventDate: "12-10-01",
      saleDate: "23-11-01",
      artistIcon: "https://i.etsystatic.com/14980242/r/il/eb1ec7/3969937145/il_fullxfull.3969937145_p9i9.jpg",
      location: "Cork",
    },
    {
      id: "D09123N2FV",
      artistName: "Linkin Park",
      eventDate: "12-09-30",
      saleDate: "23-10-15",
      artistIcon: "https://upload.wikimedia.org/wikipedia/en/2/2a/Linkin_Park_Hybrid_Theory_Album_Cover.jpg",
      location: "Dublin",
    },
  ];

  const user = {
    id: "B0912FREQN",
    firstName: "John",
    lastName: "Doe",
    userName: "SirName",
    dateOfBirth: "12-10-1994",
    gender: "Male",
    email: "mrsir@gmail.com",
    profilePicture: "https://static.wikia.nocookie.net/reddeadredemption/images/6/6c/JohnMarston-RDR1.jpg",
    spotifyPremium: true,
    preferences: {
      preferredGenres: ["Rock", "Pop", "Electronic"],
      receiveEmailNotifications: true,
      receivePushNotifications: false,
    },
    favoriteArtists: ["The Stone Roses", "ACDC", "Linkin Park"],
    location: {
      country: "Ireland",
      city: "Dublin",
    },
  };

  const personalizedFeed = upcomingFeed.filter(
    (event) =>
      user.favoriteArtists.includes(event.artistName) || event.location === user.location.city
  );

  return (
    <div className="container mx-auto px-6 py-16">
      {/* Personalized Greeting */}
      <div className="text-center mb-12">
        <img
          src={user.profilePicture}
          alt={`${user.firstName} ${user.lastName}`}
          className="mx-auto rounded-full w-32 h-32 object-cover mb-6 shadow-lg"
        />
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome back, {user.firstName}!</h1>
        <p className="text-xl text-gray-600">Here are some upcoming events based on your favorite artists and location in {user.location.city}.</p>
      </div>

      {/* Personalized Event Feed */}
      <div className="space-y-12">
        {personalizedFeed.length > 0 ? (
          personalizedFeed.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden h-64">
              <div className="flex h-full">
                <div className="w-1/3 h-full">
                  <img
                    src={event.artistIcon}
                    alt={event.artistName}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="w-2/3 p-6 flex flex-col justify-center">
                  <h2 className="text-3xl font-semibold text-gray-800 mb-4">{event.artistName}</h2>
                  <p className="text-lg text-gray-600 mb-2">Event Date: {event.eventDate}</p>
                  <p className="text-lg text-gray-600 mb-6">Location: {event.location}</p>
                  <Link href={`/eventPage/${event.id}`} className="text-red-500 text-lg font-medium inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-lg text-gray-600">No events found matching your preferences.</p>
        )}
      </div>

      <button className="block mx-auto mt-16 text-white bg-red-500 hover:bg-red-600 focus:outline-none py-3 px-8 rounded-lg text-lg shadow-lg transition duration-300 ease-in-out">
        Explore More Events
      </button>
    </div>
  );
}
