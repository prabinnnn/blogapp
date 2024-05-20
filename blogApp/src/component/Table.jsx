export default function table(Header, body) {
  return (
    <>
      <table border={1}>
        <thead>
          {Header.map((index, item) => (
            <tr key={index}>
              <th>{item}</th>
            </tr>
          ))}
        </thead>
        <tbody>
          {body.length > 0 ? (
            body.map((item, index) => (
              <tr key={index}>
                <th>{item.name}</th>
                <th>{item.age}</th>
              </tr>
            ))
          ) : (
            <td colSpan={2} style={{ TextAlign: "center" }}>
              No Data
            </td>
          )}
        </tbody>
      </table>
    </>
  );
}
