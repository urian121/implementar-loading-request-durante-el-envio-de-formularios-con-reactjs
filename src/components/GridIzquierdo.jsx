
function GridIzquierdo({ data }) {
  const { nombre, telefono, sexo } = data;

  return (
    <>
      <div
        className="col-md-5 px-3"
        style={{ borderRight: "1px solid #7366ff" }}>

        {data && (
              <div className="justify-content-md-start">
                <h2 className="fw-bold">
                  Datos del Empleado <hr />
                </h2>
                <p className="text-start">
                  <i className="bi bi-person"></i> &nbsp; &nbsp; Empleado: &nbsp;
                  {nombre}
                </p>
                <p className="text-start">
                  <i className="bi bi-telephone"></i> &nbsp; &nbsp; Teléfono: &nbsp;
                  {telefono}
                </p>
                <p className="text-start">
                  <i className="bi bi-person-arms-up"></i> &nbsp; &nbsp; Sexo: &nbsp;
                  {sexo}
                </p>
              </div>
        )}
      </div>
    </>
  );
}


export default GridIzquierdo;
