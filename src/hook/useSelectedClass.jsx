import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useSelectedClass = () => {
  const { user } = useContext(AuthContext);

  const { refetch, data: selectClass = [] } = useQuery(
    ["selectedClass"],
    async () => {
      const res = await fetch(
        `http://localhost:5000/selectedClass/${user?.email}`
      );
      return await res.json();
    }
  );

  return [selectClass, refetch];
};

export default useSelectedClass;
