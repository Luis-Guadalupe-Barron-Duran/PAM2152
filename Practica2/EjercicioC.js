const personas =[
{nombre: "Ana", edad: 22},
{nombre: "Luis", edad: 35},
{nombre: "Maria", edad: 28}

];

const encontrarL= personas.find(persona => persona.nombre === "Luis");
console.log(encontrarL);

personas.forEach(persona => console.log(persona.nombre + " tiene "+ persona.edad ));

const sumaedad= personas.reduce((a, b) => a+b.edad, 0);
console.log("La suma de las edades es: "+sumaedad);