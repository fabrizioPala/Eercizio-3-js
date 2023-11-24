/*Utilizza forEach per stampare i nomi degli studenti.
Utilizza find per trovare uno studente con un voto superiore a 90.
Utilizza reduce per calcolare la media dei voti degli studenti.
Utilizza map per creare un nuovo array contenente i nomi degli studenti in maiuscolo.
Utilizza filter per trovare gli studenti con voti superiori a 85.
const studenti = [
  { nome: "Alice", voto: 95 },
  { nome: "Bob", voto: 88 },
  { nome: "Carol", voto: 76 },
  { nome: "David", voto: 92 },
  { nome: "Eve", voto: 84 },
];*/
const studenti = [
    { nome: "Alice", voto: 95 },
    { nome: "Bob", voto: 88 },
    { nome: "Carol", voto: 76 },
    { nome: "David", voto: 92 },
    { nome: "Eve", voto: 84 },
  ]
  //FOR EACH
 studenti.forEach(element=> console.log(element.nome));
 //FIND
 let studenteVotoAlto=studenti.find(student=>student.voto>90) 
 console.log(studenteVotoAlto)
 //REDUCE
 function average(array){ 
    let sum=array.reduce((acc,person)=> acc+person.voto,0)
    let average= sum/array.length
    return average ;
}
//MAP
let mapStudents=studenti.map(student=> student.nome.toUpperCase())
console.log(mapStudents)
//Filter
let filteredStudents=studenti.filter(alumn=>alumn.voto>85)
console.log(filteredStudents)