import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "./Pages/Root";
import Home from "./Pages/Home";
import AnimePage, { animeLoader } from "./Pages/AnimePage";
import MangaPage, { mangaLoader } from "./Pages/MangaPage";

const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />

        <Route
          path="anime/:animeId"
          element={<AnimePage />}
          loader={({ params }) => animeLoader(params.animeId as string)}
        />

        <Route
          path="manga/:animeId"
          element={<MangaPage />}
          loader={({ params }) => mangaLoader(params.animeId as string)}
        />
      </Route>
    )
  );

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
