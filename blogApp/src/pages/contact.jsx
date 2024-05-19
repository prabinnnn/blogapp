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
    </div>
  );
};

export default Contact;
