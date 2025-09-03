

function Puerta() {

  return (
    <>
       <div style={{ backgroundColor: "aquamarine", width: "100%" }}>
      <h1 style={{ color: "brown" }}>Hola mundo</h1>
      <p>Me llamo Emiliano</p>
      <p>tengo 21 años</p>

      <h2>
        <fieldset>¿Para que vine al curso?</fieldset>
      </h2>

      <p>
        Vine para tener mas conocimientos , ya hice un curso de testing lo
        termine la semana pasada.
      </p>

      <h2 style={{ color: "rgb(0, 150, 184)" }}>¿A que me dedico?</h2>
      <ul style={{ justifyContent: "center" }}>
        <li>Tecnico Mécanico</li>
        <li>Barbero</li>
        <li>Carpintero</li>
      </ul>

      <h4>Imagen random</h4>
      <img src="128ad33f36b9d53236c899ff7aa9301d.jpg" alt="stich" />

      <h3>esto es un input</h3>
      <label htmlFor="nombre">escribe tu nombre</label>
      <input id="nombre" type="text" name="nombre" placeholder="escribe tu nombre" />

      <button>Enviar</button>
      <button>Haz clic</button>

      <p id="parrafo">Texto original</p>
    </div>
    
    </>
  )
}

export default Puerta
