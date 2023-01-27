import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Animes from "./components/animes/Animes";
import Mangas from "./components/mangas/Mangas";
import Title from "./components/Title";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <section className="flex flex-col items-center justify-center h-screen bg-slate-400">
        <Title title="Animes" />
        <Animes />

        <br />

        <Title title="Mangas" />
        <Mangas />
      </section>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
