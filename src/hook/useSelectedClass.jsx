import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useSelectedClass = () => {
  const { user } = useContext(AuthContext);

  const { refetch, data: selectClass = [] } = useQuery(
    ["selectedClass"],
    async () => {
      const res = await fetch(
        `https://fluency-factory-server.vercel.app/selectedClass/${user?.email}`
      );
      return await res.json();
    }
  );

  return [selectClass, refetch];
};

export default useSelectedClass;
