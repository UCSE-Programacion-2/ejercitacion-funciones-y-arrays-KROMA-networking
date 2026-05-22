// No cambies los nombres de las funciones.

// --- Temario ampliado: constantes ---
// ¿Qué string devuelve typeof en cada línea, en orden hipotético?
// Antes del `=` (pero después de hoist de `var`): console.log(typeof f);
// var f = function() { return 1; };
const resultadoTipoFuncionExpresadaVar = 'undefined';

// Reemplaza null por una función flecha asignada a identificador (sin palabra function):
// ejemplo de forma: identificador = (num) => num * ...
const duplicarConFlecha = (num) => num * 2;

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1 y devuelve el array
  // Tu código:
  const resultado = array;
  for (let i = 0; i < resultado.length; i += 1) {
    resultado[i] += 1;
  }
  return resultado;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas con espacios
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(' ');
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  return array.includes(elemento);
}

function agregarNumeros(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let suma = 0;
  for (let i = 0; i < numeros.length; i += 1) {
    suma += numeros[i];
  }
  return suma;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let suma = 0;
  for (let i = 0; i < resultadosTest.length; i += 1) {
    suma += resultadosTest[i];
  }
  return suma / resultadosTest.length;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let max = numeros[0];
  for (let i = 1; i < numeros.length; i += 1) {
    if (numeros[i] > max) {
      max = numeros[i];
    }
  }
  return max;
}

function multiplicarArgumentos(...args) {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  if (args.length === 0) return 0;
  if (args.length === 1) return args[0];
  let producto = 1;
  for (let i = 0; i < args.length; i += 1) {
    producto *= args[i];
  }
  return producto;
}

// ==========================================
// SECCIÓN: TRABAJO CON OBJETOS (OBJECTS)
// ==========================================

function crearGato(nombre, edad) {
  // Crear un nuevo objeto con las propiedades "nombre" y "edad"
  // Agrega un método llamado "meow" que devuelva "Meow!"
  // Tu código:
  return {
    nombre,
    edad,
    meow() {
      return 'Meow!';
    },
  };
}

function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto dinámicamente con valor null usando corchetes
  // Tu código:
  const obj = objeto;
  obj[property] = null;
  return obj;
}

function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método. Invócalo.
  // Tu código:
  objeto[metodo]();
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // Multiplica la propiedad "numeroMisterioso" por 5
  // Tu código:
  return objetoMisterioso.numeroMisterioso * 5;
}

function eliminarPropiedad(objeto, propiedad) {
  // Elimina la propiedad del objeto usando la palabra clave delete
  // Tu código:
  const obj = objeto;
  delete obj[propiedad];
  return obj;
}

function nuevoUsuario(nombre, email, password) {
  // Crea un objeto con los datos del usuario
  // Tu código:
  return {
    nombre,
    email,
    password,
  };
}

function tieneEmail(usuario) {
  // Devuelve true si el valor de email está definido y no es null/undefined
  // Tu código:
  return usuario.email !== undefined && usuario.email !== null;
}

function tienePropiedad(objeto, propiedad) {
  // Comprueba si el objeto cuenta con la propiedad buscada
  // Tu código:
  return Object.prototype.hasOwnProperty.call(objeto, propiedad);
}

function verificarPassword(usuario, password) {
  // Comprueba si la password enviada coincide
  // Tu código:
  return usuario.password === password;
}

function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contraseña existente
  // Tu código:
  const usr = usuario;
  usr.password = nuevaPassword;
  return usr;
}

function agregarAmigo(usuario, nuevoAmigo) {
  // Agrega "nuevoAmigo" al array interno "amigos"
  // Tu código:
  const usr = usuario;
  usr.amigos.push(nuevoAmigo);
  return usr;
}

function pasarUsuarioAPremium(usuarios) {
  // Modifica la propiedad de una lista de objetos usuarios
  // Tu código:
  const lista = usuarios;
  for (let i = 0; i < lista.length; i += 1) {
    lista[i].esPremium = true;
  }
  return lista;
}

function sumarLikesDeUsuario(usuario) {
  // Suma los likes iterando la propiedad posts que contiene objetos dentro
  // Tu código:
  let totalLikes = 0;
  for (let i = 0; i < usuario.posts.length; i += 1) {
    totalLikes += usuario.posts[i].likes;
  }
  return totalLikes;
}

function agregarMetodoCalculoDescuento(producto) {
  // Agrega el método de cálculo matemático al objeto
  // Tu código:
  const prod = producto;
  prod.calcularPrecioDescuento = function calcularPrecioDescuento() {
    return this.precio - this.precio * this.porcentajeDeDescuento;
  };
  return prod;
}

// ==========================================
// SECCIÓN: CALLBACKS Y MÉTODOS DE BÚSQUEDA
// ==========================================

function invocarCallback(cb) {
  // Invoca al callback cb
  cb();
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros de un array y pasa el resultado a cb
  let suma = 0;
  for (let i = 0; i < numeros.length; i += 1) {
    suma += numeros[i];
  }
  cb(suma);
}

function forEach(array, cb) {
  // Itera sobre la matriz pasando los valores uno por uno al callback
  for (let i = 0; i < array.length; i += 1) {
    cb(array[i]);
  }
}

function map(array, cb) {
  // Crea un nuevo array mapeado con las respuestas devueltas del callback
  const nuevoArray = [];
  for (let i = 0; i < array.length; i += 1) {
    nuevoArray.push(cb(array[i]));
  }
  return nuevoArray;
}

function filter(array, cb) {
  // Filtra los valores que dan verdadero/truthy en el callback
  const filtrados = [];
  for (let i = 0; i < array.length; i += 1) {
    if (cb(array[i])) {
      filtrados.push(array[i]);
    }
  }
  return filtrados;
}

// --- Temario ampliado: extremos pop/shift y APIs de búsqueda ---

function sacarUltimoConPop(arreglo) {
  return arreglo.pop();
}

function sacarPrimeroConShift(arreglo) {
  return arreglo.shift();
}

function unirConSeparador(elementos, separador) {
  return elementos.join(separador);
}

function indicePrimero(arreglo, item) {
  return arreglo.indexOf(item);
}

function indiceUltimo(arreglo, item) {
  return arreglo.lastIndexOf(item);
}

function existeConIncludes(arreglo, item) {
  return arreglo.includes(item);
}

function subArregloCopia(origen, inicio, fin) {
  return origen.slice(inicio, fin);
}

function pegarDosArreglos(arregloA, arregloB) {
  return arregloA.concat(arregloB);
}

function aplicarSpliceDesde(arreglo, desde, borrarCantidad, ...insertarItems) {
  const arr = arreglo;
  arr.splice(desde, borrarCantidad, ...insertarItems);
  return arr;
}

// --- Reverse / Sort (mutaciones) ---
function invertirEnLugar(arreglo) {
  return arreglo.reverse();
}

function ordenarNumerosAsc(arreglo) {
  return arreglo.sort((a, b) => a - b);
}

function sumatorioConReduce(numeros, inicial = 0) {
  return numeros.reduce((acumulador, actual) => acumulador + actual, inicial);
}

function agruparPorCampoReduce(listaObjetos, nombreCampo) {
  return listaObjetos.reduce((grupo, objeto) => {
    const acc = grupo;
    const clave = objeto[nombreCampo];
    if (!acc[clave]) {
      acc[clave] = [];
    }
    acc[clave].push(objeto);
    return acc;
  }, {});
}

function agruparPorCampoObjectGroupBy(listaObjetos, nombreCampo) {
  // Hace uso del método global moderno de agrupación de objetos de JavaScript
  return Object.groupBy(listaObjetos, (item) => item[nombreCampo]);
}

function encadenarOperacionesSinAnidar(valorInicial, funcionesTransform) {
  let resultado = valorInicial;
  for (let i = 0; i < funcionesTransform.length; i += 1) {
    resultado = funcionesTransform[i](resultado);
  }
  return resultado;
}

function objetoNombreMayuscConFlechaAnidada(nombre) {
  return {
    nombre,
    enMayuscMedianteFlecha() {
      const flecha = () => this.nombre.toUpperCase();
      return flecha();
    },
  };
}

function establecerValorMismaReferencia(objetoConstanteRef, propiedadString, nuevoValor) {
  const obj = objetoConstanteRef;
  obj[propiedadString] = nuevoValor;
  return obj;
}

const sumarMedianteExpresionNombrada = function nombradoInternamente(a, b) {
  return a + b;
};

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  resultadoTipoFuncionExpresadaVar,
  duplicarConFlecha,
  sumarMedianteExpresionNombrada,
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento,
  invocarCallback,
  sumarArray,
  forEach,
  map,
  filter,
  sacarUltimoConPop,
  sacarPrimeroConShift,
  unirConSeparador,
  indicePrimero,
  indiceUltimo,
  existeConIncludes,
  subArregloCopia,
  pegarDosArreglos,
  aplicarSpliceDesde,
  invertirEnLugar,
  ordenarNumerosAsc,
  sumatorioConReduce,
  agruparPorCampoReduce,
  agruparPorCampoObjectGroupBy,
  encadenarOperacionesSinAnidar,
  objetoNombreMayuscConFlechaAnidada,
  establecerValorMismaReferencia,
};
