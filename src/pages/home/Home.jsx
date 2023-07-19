import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";

import "./styles.scss";

const Home = () => {
  return (
    <div>
      <HeroBanner />

      <div style={{ height: 1000 }}></div>
      <Trending />
    </div>
  );
};

export default Home;
