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
import AnimePage from "./Pages/AnimePage";
import MangaPage from "./Pages/MangaPage";
import SearchResultsPage from "./Pages/SearchResultsPage";

const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />

        <Route path="anime/:animeId" element={<AnimePage />} />

        <Route path="manga/:animeId" element={<MangaPage />} />

        <Route path="search/:searchTerm" element={<SearchResultsPage />} />
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
