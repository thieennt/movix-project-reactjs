import HeroBanner from "./heroBanner/HeroBanner";
import "./styles.scss";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <div style={{ height: 1000 }}></div>
    </div>
  );
};

export default Home;
