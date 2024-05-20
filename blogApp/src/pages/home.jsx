// const Home = ({ IsGoal = 0 }) => {
//   let result;
//   switch (true) {
//     case IsGoal === 0:
//       result = <MissedGoal />;
//       break;
//     case IsGoal === 1:
//       result = <Goal />;
//       break;
//     case IsGoal === 2:
//       result = <Hattrickgoal />;
//       break;
//     default:
//       result = <>No Goal Registration</>;
//   }
//   return <>{result}</>;
// };
// const Goal = () => {
//   return <>1 Goal</>;
// };
// const MissedGoal = () => {
//   return <>No Gaol!!!</>;
// };
// const Hattrickgoal = () => {
//   return <>2 Goal!!!</>;
// };

const Home = ({ data = [] }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((user, index) => (
              <tr key={index}>
                <th>{user.name}</th>
                <th>{user.age}</th>
              </tr>
            ))
          ) : (
            <>No Data</>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Home;
