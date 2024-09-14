import { FavouriteContext } from "../Context";
import { useLocalStorage } from "../Hooks";

const FavouriteProvider = ({ children }) => {
  const [favourite, setFavourite] = useLocalStorage("favourites", []);

  // Add to Favourites function
  const addToFavourites = (latitude, longitude, location) => {
    setFavourite(...favourite, {
      latitude,
      longitude,
      location,
    });
  };

  // Remove from Favourites function
  const removeFromFavourites = (location) => {
    const restFavourites = favourite.filter(
      (favourite) => favourite.location !== location
    );
  };
  return (
    <FavouriteContext.Provider
      value={{ addToFavourites, removeFromFavourites, favourite }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteProvider;
