import Animes from "../components/animes/Animes";
import Mangas from "../components/mangas/Mangas";

const Home = () => {
  return (
    <section className="flex flex-col justify-between h-[calc(100vh-35px)] bg-slate-400 py-5">
      <div>
        <Animes />
      </div>

      <div>
        <Mangas />
      </div>
    </section>
  );
};

export default Home;
