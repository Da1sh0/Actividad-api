function exterior() {
    let variableExterna = "Soy externa";
  
    function interior() {
      console.log(variableExterna);
    }
  
    return interior;
  }
  
  // Crear un closure
  let closure = exterior();
  
  // Llamar al closure, que aún tiene acceso a variableExterna
  closure(); // Imprime: Soy externa

function init() {
  var name = "Mozilla"; // Variable local creada por init
  function displayName() {
      // displayName() es la función interna que forma el closure
      console.log(name); // Accede a la variable declarada en la función padre
  }
  displayName();
}
init(); // Llama a la función init
