import { useApp } from "../context/AppContext";
import { useEffect } from "react";

function Qualifications() {
  const {setTitle} = useApp();
  useEffect(()=>{
    setTitle("Qualifications")
  },[])
  return <div className="text-black">Qualifications </div>;
}

export default Qualifications;
