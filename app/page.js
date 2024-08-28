import { Container } from '../_components/Container'
import Link from 'next/link'

export default function Page() {
  const upcomingFeed = [
    {
      id: "B09123N2QN",
      artistName: "The Stone Roses",
      eventDate: "12-09-25",
      saleDate: "23-10-24",
      artistIcon: "https://audioxide.com/api/images/album-artwork/the-stone-roses-the-stone-roses-medium-standard.jpg",
    },
    {
      id: "B09123N2FV",
      artistName: "The Stone Roses",
      eventDate: "12-09-25",
      saleDate: "23-10-24",
      artistIcon: "https://audioxide.com/api/images/album-artwork/the-stone-roses-the-stone-roses-medium-standard.jpg",
    },
    {
      id: "B09123F4QN",
      artistName: "The Stone Roses",
      eventDate: "12-09-25",
      saleDate: "23-10-24",
      artistIcon: "https://audioxide.com/api/images/album-artwork/the-stone-roses-the-stone-roses-medium-standard.jpg",
    },
  ]

  return (
    <div className="container px-5 py-24 mx-auto">
      <ul>
        {upcomingFeed.map((artist) => (
          <li key={artist.id} className="mb-10">
            <section className="text-gray-600 body-font">
              <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 flex-shrink-0">
                  <img
                    src={artist.artistIcon}
                    alt={artist.artistName}
                    width={128}
                    height={128}
                    className="rounded-full"
                  />
                </div>
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                    {artist.artistName}
                  </h2>
                  <p className="leading-relaxed text-base">Event Date: {artist.eventDate}</p>
                  <Link href={`/events/${artist.id}`} className="mt-3 text-red-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </section>
          </li>
        ))}
      </ul>
      <button className="flex mx-auto mt-20 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
        Button
      </button>
    </div>
  )
}
