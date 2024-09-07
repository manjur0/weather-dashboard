import Header from "./Components/Headers/Header";
import WeatherBoard from "./Components/weather/WeatherBoard";

const App = () => {
  return (
    <div className="grid place-items-center h-screen">
      <Header />
      <main>
        <section>
          <WeatherBoard />
        </section>
      </main>
    </div>
  );
};

export default App;
