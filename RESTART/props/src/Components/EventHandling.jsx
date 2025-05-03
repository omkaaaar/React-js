const EventHandling = () => {
  const handleChange = () => {
    console.log("Value changed");
  };

  return (
    <div>
      <button
        onClick={() => {
          alert("Kya bey yede?");
        }}
      >
        EVENT HANDLER CLICK
      </button>

      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default EventHandling;
