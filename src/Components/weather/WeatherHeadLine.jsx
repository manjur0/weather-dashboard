import PinIcon from "../../assets/pin.svg";
import CloudIcon from "../../assets/cloud.svg";
import { useContext } from "react";
import { WeatherContext } from "../../Context";
import { getDateTimeFormat } from "../../utils/Date-utils";
const WeatherHeadLine = () => {
  const { weatherData } = useContext(WeatherContext);
  const { climate, temperature, location, time } = weatherData;
  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={CloudIcon} alt="cloud" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temperature)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={PinIcon} alt="pin" />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {getDateTimeFormat(time, "time", false)} -
        {getDateTimeFormat(time, "date", false)}
      </p>
    </div>
  );
};

export default WeatherHeadLine;
