import { useEffect, useState } from "react";

const useClass = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://fluency-factory-server-rafatulislam60.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
        setLoading(false);
      });
  }, []);
  return [classes, loading];
};

export default useClass;
