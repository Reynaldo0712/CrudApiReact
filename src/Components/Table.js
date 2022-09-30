import React from "react";
import TableRow from "./TableRow";

const Table = ({ data ,setDataToEdit,DeleteData,UpdateData}) => {
  return (
    <>
      <div className="row justify-content-center align-items-center mt-5">
        <div className="col-md-7">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Firstname</th>
                <th scope="col">Lastname</th>
                <th scope="col">Email</th>
                <th scope="col">Number</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
               {data.length > 0 ? (
                data.map((el) => <TableRow key={el.id} el={el} setDataToEdit={setDataToEdit}  DeleteData={DeleteData}/>)
              ) : (
                <tr>
                  <td colSpan="6">No hay dataos</td>
                </tr>
              )} 

             
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
