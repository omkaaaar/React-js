import { useParams } from "react-router-dom";

const Parameters = () => {
  const { id } = useParams();
  return <div>Parameters: {id}</div>;
};

export default Parameters;
