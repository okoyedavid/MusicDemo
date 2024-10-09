import Button from "../pages/Button";

function Home() {
  return (
    <div className="h-full justify-center grow items-center flex flex-col ">
      <p className="text-btn font-bold uppercase">
        Hey there!! <br />{" "}
        <span className="text-xs lowercase text-headline">
          what would you like to listen to today?
        </span>
      </p>

      <Button to={"/playlist"}> Go to Playlist </Button>
    </div>
  );
}

export default Home;
