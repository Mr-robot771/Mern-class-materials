import { useApp } from "../context/AppContext";
import { useEffect } from "react";
import HomeSection from "../component/HomeSection";
function Home() {
  const { setTitle } = useApp();
  useEffect(() => {
    setTitle("Home");
  }, []);
  return (
    <>
      <HomeSection />
    </>
  );
}

export default Home;
