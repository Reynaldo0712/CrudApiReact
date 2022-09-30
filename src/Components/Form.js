import React, {useEffect}from "react";
import { useForm } from "../hooks/useForm";

const initialForm = {
  id: null,
  name: "",
  lastname: "",
  email: "",
  number: "",
};



const Form = ({CreateData,UpdateData,dataToEdit,setDataToEdit}) => {
  let { form, handleForm, handleSubmit,setForm,handleReset } = useForm(
    initialForm,
    CreateData,
    UpdateData,
    setDataToEdit
  );
  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);


  return (
    <div className="row justify-content-center align-items-center mt-5">
      <div className="col-md-7">
        <form > 
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Firstname
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
             
              value={form.name}
              onChange={handleForm}
            />
          </div>
         
          <div className="mb-3">
            <label htmlFor="lastname" className="form-label">
              Lastname
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              name="lastname"
              value={form.lastname}
              onChange={handleForm}
             
            />
          </div>
         
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={form.email}
              onChange={handleForm}
            
            />
          </div>
          <div className="mb-3">
            <label htmlFor="number" className="form-label">
              Phone number
            </label>
            <input
              type="tel"
              className="form-control"
              id="number"
              name="number"
              value={form.number}
              onChange={handleForm}
            
            />
          </div>
         
          <button type="submit" className="btn btn-primary me-5" onClick={handleSubmit}>
            Submit
          </button>

          <button type="reset" className="btn btn-warning" onClick={handleReset}> 
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
