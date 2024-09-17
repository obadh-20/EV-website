import { useEffect, useState } from "react";
import Background from "./components/background/background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

const App = () => {
  let heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "your passions" },
  ];
  const [heroCount, setHeroCount] = useState(2);
  const [playstate, setPlay] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 3000);
  }, []);
  return (
    <div>
      <Background playstate={playstate} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlay={setPlay}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playstate={playstate}
      />
    </div>
  );
};

export default App;
