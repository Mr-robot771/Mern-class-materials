import { useApp } from "../context/AppContext";
import { useEffect } from "react";

function Experience() {
  const { setTitle } = useApp();
  useEffect(() => {
    setTitle("Experience");
  },[]);
  return <div className="text-black">Experience</div>;
}

export default Experience;
