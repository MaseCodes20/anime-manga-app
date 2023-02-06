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
import { LazyLoadRoutes } from "./routes/LazyLoadRoutes";

const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />

        <Route
          path="anime/:animeId"
          element={<LazyLoadRoutes componentName="AnimePage" />}
        />

        <Route
          path="manga/:animeId"
          element={<LazyLoadRoutes componentName="MangaPage" />}
        />

        <Route
          path="search/:searchTerm"
          element={<LazyLoadRoutes componentName="SearchResultsPage" />}
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
