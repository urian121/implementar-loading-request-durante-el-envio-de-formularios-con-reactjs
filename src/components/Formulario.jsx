import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Titulo from "./Titulo";
import GridIzquierdo from "./GridIzquierdo";

function Formulario() {
  const [data, setData] = useState({});
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (dataForm) => {
    console.log(dataForm);
    setData(dataForm)
  };

  return (
    <div className="row justify-content-md-center">
      <Titulo />
      <GridIzquierdo data={data} />

      <div className="col-md-7">
        <h2 className="text-center mb-3 fw-bold">Información del Empleado <hr /></h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre del Empleado:
            </label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              {...register('nombre', { required: true })}
            />
            {errors.nombre && <span className="text-danger">Este campo es requerido</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="telefono" className="form-label">
              Teléfono del Empleado:
            </label>
            <input
              type="number"
              className="form-control"
              id="telefono"
              name="telefono"
            />
            {errors.telefono && <span className="text-danger">Este campo es requerido</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="sexo" className="form-label">
              Sexo del Empleado:
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="sexo"
                id="sexoMasculino"
                value="masculino"
              />
              <label className="form-check-label" htmlFor="sexoMasculino">
                Masculino
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="sexo"
                id="sexoFemenino"
                value="femenino"
              />
              <label className="form-check-label" htmlFor="sexoFemenino">
                Femenino
              </label>
            </div>
          </div>
          <div className="d-grid gap-2">
            <button
              className="btn btn-primary btn_add"
              type="submit">
              Enviar Formulario
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Formulario;
