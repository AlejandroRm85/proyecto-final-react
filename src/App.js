import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePage } from './components/pages/home/HomePage';
import Error from './components/pages/errors/404';
import CharactersPage from './components/pages/characters/CharactersPage';
import LocationsPage from './components/pages/locations/LocationsPage';
import { CharacterDetail } from './components/Character/CharacterDetail';
import CharactersContext from './components/context/CharactersContext';
import EpisodesContext from './components/context/EpisodesContext';
import LocationsContext from './components/context/LocationsContext';
import { EpisodeDetail } from './components/episode/EpisodeDetail';
import EpisodesPage from './components/pages/episodes/EpisodesPage';
import { LocationDetail } from './components/locations/LocationDetail';

const dataCharacter = {
  character: {}
};

const dataEpisode = {
  episode: {}
};

const dataLocation = {
  location: {}
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <Error />
  },
  {
    path: "characters/",
    element: <CharactersContext.Provider value={dataCharacter}><CharactersPage /></CharactersContext.Provider>,
    CharactersContext
  },
  {
    path: "character/:id",
    element: <CharactersContext.Provider value={dataCharacter}><CharacterDetail /></CharactersContext.Provider>
  },
  {
    path: "episodes/",
    element: <EpisodesContext.Provider value={dataEpisode}><EpisodesPage /></EpisodesContext.Provider>
  },
  {
    path: "episode/:id",
    element: <EpisodesContext.Provider value={dataEpisode}><EpisodeDetail /></EpisodesContext.Provider>
  },
  {
    path: "locations/",
    element: <LocationsContext.Provider value={dataLocation}><LocationsPage /></LocationsContext.Provider>
  },
  {
    path: "location/:id",
    element: <LocationsContext.Provider value={dataLocation}><LocationDetail /></LocationsContext.Provider>
  }
]);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
