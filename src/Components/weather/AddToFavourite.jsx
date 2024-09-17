import HeartIcon from "../../assets/heart.svg";
import RedHeratIcon from "../../assets/heart-red.svg";
import { useContext, useState } from "react";
import { FavouriteContext } from "../../Context";
const AddToFavourite = () => {
  const { addToFavourites, removeFromFavourites, favourites } =
    useContext(FavouriteContext);
  const [isFavourite, setIsFavourite] = useState(false);

  // handle favourites toggle
  const hanldeFavourites = () => {
    setIsFavourite(!isFavourite);
  };
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={hanldeFavourites}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? RedHeratIcon : HeartIcon} alt="heart" />
        </button>
      </div>
    </div>
  );
};

export default AddToFavourite;
