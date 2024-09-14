import Header from "./Components/Headers/Header";
import WeatherBoard from "./Components/weather/WeatherBoard";
import { WeatherProvider } from "./Provider";
const App = () => {
  return (
    <WeatherProvider>
      <div className="grid place-items-center h-screen ">
        <Header />
        <main>
          <section>
            <WeatherBoard />
          </section>
        </main>
      </div>
    </WeatherProvider>
  );
};

export default App;
