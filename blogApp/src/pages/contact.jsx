const Contact = () => {
  const resgister = () => {
    alert("thank u for submiting");
  };
  const sendForm = (name) => {
    alert(`thank you ${name}`);
  };
  return (
    <div>
      Contact
      <br />
      <button onClick={resgister}>Submit</button>
      <button onClick={() => sendForm("prabin")}>Thank you</button>
      <input placeholder="enter ur name" />
      <button onClick={() => sendForm()}>register</button>
    </div>
  );
};

export default Contact;
