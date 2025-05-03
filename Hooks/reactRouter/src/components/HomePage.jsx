import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/counter");
  };
  return (
    <div>
      <h1>homePage</h1>
      <button onClick={handleClick}>Counter</button>
    </div>
  );
};

export default HomePage;
