const poke = 'excadrill';
const url = `https://pokeapi.co/api/v2/pokemon/${poke}`;
async function obtenerDatosPokemon() {
  try {
    const response = await fetch(url); // Realizar la solicitud GET a la API
    if (!response.ok) { // Verificar si la respuesta es exitosa
      throw new Error(`Error al obtener los datos. Código de estado: ${response.status}`);
    }
    const data = await response.json(); // Manejar los datos recibidos
    // Llamar a funciones para manipular los datos
    //mostrarDatosPokemon(data);
    mostrarNombrePokemon(data);
    mostrarTiposPokemon(data);
  } catch (error) {console.error('Error al obtener los datos:', error.message);}
}
function mostrarDatosPokemon(data) {console.log('Datos del Pokémon:', data);}
function mostrarNombrePokemon(data) {console.log('Nombre del Pokémon:', data.name);}
function mostrarTiposPokemon(data) {console.log('Número en la Pokédex:', data.id);console.log('Tipos:', data.types.map(type => type.type.name));}
obtenerDatosPokemon();