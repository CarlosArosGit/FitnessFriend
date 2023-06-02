let rutinas = ['Sentadillas', 'Bancos', 'Peso muerto', 'Prensas'];

const asignarFunciones = () => {
  let btnMostrar = document.getElementById('btnMostrar');
  btnMostrar.addEventListener('click', getDataForm);
}

const getDataForm = () => {
  let semanas = document.getElementById('semanas').value;
  let dias = document.getElementById('dias').value;
  const diasRutina = (semanas * dias) * 2;
  console.log(`Semanas: ${semanas}`)
  console.log(`Días: ${dias}`)

  let gen1 = generador()
  for (let i = 1; i <= diasRutina; i += 2) {
    let genResult = gen1.next();
    if (genResult.done) {
      gen1 = generador();
      genResult = gen1.next();
    }
    console.log(`Día ${i}: ${genResult.value}`);
  }


}

function* generador() {
  let i = 0
  yield rutinas[i]
  i++
  yield rutinas[i]
  i++
  yield rutinas[i]
  i++
  yield rutinas[i]
  i++
  return 'Fin Rutinas'
}
