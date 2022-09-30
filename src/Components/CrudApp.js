import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { HttpHelper } from "../helper/HttpHelper";
import ErrorMessage from "./ErrorMessage";
import Form from "./Form";
import Loader from "./Loader";
import Table from "./Table";

const CrudApp = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState();
  let api = HttpHelper();
  let url = "http://localhost:5000/clientes";

  const CreateData = (data) => {
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    api.post(url, options).then((res) => {
      if (!res.err) {
        setDb([...db, res]);
      } else {
        setDb(null);
        setError(res);
      }
    });
  };

  const UpdateData = (data) => {
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    let endpoint = `${url}/${data.id}`;
    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      } else {
        setDb(null);
        setError(res);
      }
    });
  };
  const DeleteData = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        let endpoint = `${url}/${id}`;
        api.del(endpoint).then((res) => {
          if (!res.err) {
            let newData = db.filter((el) => el.id !== id);
            setDb(newData);
          } else {
            setDb(null);
            setError(res);
          }
        });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  useEffect(() => {
    setLoader(true);
    api.get(url).then((res) => {
      if (!res.err) {
        setDb(res);
      } else {
        setDb(null);
        setError(res);
      }

      setLoader(false);
    });
  }, [url]);

  return (
    <>
      <h1 className="mt-3">Crud APP</h1>
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <Form
        CreateData={CreateData}
        dataToEdit={dataToEdit}
        UpdateData={UpdateData}
        setDataToEdit={setDataToEdit}
      />
      {loader && <Loader />}
      {error && (
        <ErrorMessage msg={`Error ${error.status}: ${error.statusText}`} />
      )}
      {db && (
        <Table
          data={db}
          setDataToEdit={setDataToEdit}
          DeleteData={DeleteData}
        />
      )}
    </>
  );
};

export default CrudApp;
