import "./EV.css";

const EventProps = () => {
  const HandleWelcomeUser = (user) => {
    alert(`Hey, ${user}`);
  };

  const handleHover = () => {
    alert(`Hey, Thanks for hovering me`);
  };

  return (
    <>
      <WelcomeUser
        onButtonClick={(user) => HandleWelcomeUser(user)}
        onMouseEnter={handleHover}
      />
    </>
  );
};

const WelcomeUser = (props) => {
  const { onButtonClick, onMouseEnter } = props;
  const handleGreeting = (user) => {
    console.log(`Hey Ram, Welcome`);
    onButtonClick(user);
  };

  return (
    <>
      <button onClick={onButtonClick}>Click</button>
      <button onMouseEnter={onMouseEnter}>Hover</button>
      <button onClick={() => handleGreeting("Ram")}>Greeting</button>
      <button onClick={handleGreeting}>Greeting</button>
    </>
  );
};

export default EventProps;
