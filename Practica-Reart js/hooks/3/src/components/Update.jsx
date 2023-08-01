import { useEffect } from "react";

const Update = ({ props }) => {
  useEffect(() => {
    console.log("Actualizando!");
  }, [props]);

  return <div>{props}</div>;
};

export default Update;
