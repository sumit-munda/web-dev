import "./EV.css";

const EventHandling = () => {
  const handleButtonClick = (event) => {
    console.log(event);
    alert("Hey I am onClick Event");
  };

  const handleWelcomeUser = (user) => {
    console.log(`Hey ${user}, Welcome.`);
    
  }

  return (
    <>
      {/* named function  */}
      <button onClick={handleButtonClick}>Click Me</button>
      {/* using fat arrow funcion  */}
      <button onClick={(event) => handleButtonClick(event)}>Click Me 2</button>
      {/* inline event handlers  */}
      <button onClick={(event) => console.log(event)}>Inline Function</button>
      {/* inline arrow function  */}
      <button onClick={() => alert('Hey i am Inline')}>Inline Arr Func</button>
      {/* passing arguments to event handlers  */}
      <button onClick={() => handleWelcomeUser('Vinod')}>Click Me</button>
    </>
  );
};

export default EventHandling;
