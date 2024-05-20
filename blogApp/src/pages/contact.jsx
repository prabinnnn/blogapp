// const Contact = () => {
//   //   const resgister = () => {
//   //     alert("thank u for submiting");
//   //   };
//   //   const sendForm = (name) => {
//   //     alert(`thank you ${name}`);
//   //   };
//   const user = "prabin";
//   return (
//     <div>
//       Contact
//       <br />
//       <input placeholder="enter ur name" id="name" />
//       {user === "prabin" ? <Admin /> : <User />}
//       {/* <br />
//       <button onClick={resgister}>Submit</button>
//       <button onClick={() => sendForm("prabin")}>Thank you</button>
//       <input placeholder="enter ur name" id="name" />
//       <button onClick={() => sendForm(document.getElementById("name").value)}>
//         register
//       </button> */}
//     </div>
//   );
// };
// const Admin = () => {
//   return <>Welcome Admin</>;
// };
// const User = () => {
//   return <>Welcome User</>;
// };
// export default Contact;
const Contact = () => {
  const notify = (name = "user") => {
    alert(`${name}`);
  };
  return (
    <>
      Contact
      <br />
      <input placeholder="Enter Name" id="name" />
      <button onMouseOver={notify(document.getElementById("prabin"))}>
        Sign Up
      </button>
    </>
  );
};
export default Contact;
