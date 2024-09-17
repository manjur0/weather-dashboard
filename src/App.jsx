import Header from "./Components/Headers/Header";
import WeatherBoard from "./Components/weather/WeatherBoard";
import { WeatherProvider, FavouriteProvider } from "./Provider";
const App = () => {
  return (
    <WeatherProvider>
      <FavouriteProvider>
        <div className="grid place-items-center h-screen ">
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      </FavouriteProvider>
    </WeatherProvider>
  );
};

export default App;
