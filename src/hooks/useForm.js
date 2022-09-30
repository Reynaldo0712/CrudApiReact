import React, { useState } from "react";
import Swal from "sweetalert2";

export const useForm = (initialForm, CreateData, UpdateData, setDataToEdit) => {
  const [form, setForm] = useState(initialForm);

  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexNumber = /^(1\s?)?(849\s?|809\s?|829)[\s\-]?\d{3}[\s\-]?\d{4}$/gm;

    if (!form.name.trim()) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "El campo nombre es obligatorio",
      });
      return;
    } else if (!regexName.test(form.name.trim())) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "El campo 'Nombre' sólo acepta letras",
      });
      return;
    }
    if (!form.lastname.trim()) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Debe completar el campo apellido",
      });
      return;
    } else if (!regexName.test(form.lastname.trim())) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "El campo 'Apellido' sólo acepta letras",
      });
      return;
    }
    if (!form.email.trim()) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Debe completar el campo email",
      });
      return;
    } else if (!regexEmail.test(form.email.trim())) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "El campo 'Email' es invalido",
      });
      return;
    }
    if (!form.number.trim()) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Debe completar el campo telefono",
      });
      return;
    } else if (!regexNumber.test(form.number.trim())) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "El campo 'Telefono' es invalido",
      });
      return;
    } else {
      Swal.fire("Good job!", "Saved!", "success");
    }

    if (form.id === null) {
      CreateData(form);
      handleReset();
    } else {
      UpdateData(form);
      handleReset();
    }
  };
  const handleReset = () => {
    setForm(initialForm);
    setDataToEdit(null);
  };
  return {
    form,
    setForm,
    handleForm,
    handleSubmit,
    handleReset,
  };
};
