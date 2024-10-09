import { useLoaderData } from "react-router-dom";

function Playlist() {
  const data = useLoaderData();

  const tracks = data.tracks.items;

  return (
    <div className="overflow-scroll flex flex-col items-center">
      <div className="bg-btn flex-grow w-full fixed rounded-3xl p-0.5 "></div>
      <ul className="divide-y-2 divide-x-2 divide-btn  grid mt-5 grid-cols-2 sm:grid-cols-3 items-center justify-center">
        {tracks.map((item) => (
          <li
            className="flex shadow-md sm:flex-row sm:items-start shadow-btn px-4 py-6 mr-4 border-y-[0.5px] mb-4 rounded-lg border-l-[2px] border-y-1 border-btn mt-2 flex-col items-center justify-between gap-2"
            key={item.id}
          >
            <img
              src={item.album.images[0].url}
              className="sm:h-40 h-20  rounded-xl"
            />
            <p className="mt-auto font-semibold text-text uppercase text-xs">
              {" "}
              {item.name}
            </p>
          </li>
        ))}
      </ul>

      {/* {errMsg && <p> {errMsg} </p>} */}

      <p className="font-bold"></p>
    </div>
  );
}

export default Playlist;
