import React from "react";

const TableRow = ({el,setDataToEdit,DeleteData}) => {

  let {id,name,lastname,email,number} = el;
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{name}</td>
      <td>{lastname}</td>
      <td>{email}</td>
      <td>{number}</td>
      <td>
        <button type="submit" className="btn btn-success me-5" onClick={() => setDataToEdit(el)}>
          Update
        </button>
        <button type="submit" className="btn btn-danger" onClick={() => DeleteData(id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
