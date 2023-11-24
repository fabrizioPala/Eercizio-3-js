const studenti = [
  { nome: "Alice", voto: 95 },
  { nome: "Bob", voto: 88 },
  { nome: "Carol", voto: 76 },
  { nome: "David", voto: 92 },
  { nome: "Eve", voto: 84 },
];

// forEach
console.log("Nomi degli studenti:");
studenti.forEach(student => console.log(student.nome));

// find
const studenteVotoAlto = studenti.find(student => student.voto > 90);
console.log("Studente con voto superiore a 90:", studenteVotoAlto);

// reduce
const averageVoto = studenti.reduce((acc, student) => acc + student.voto, 0) / studenti.length;
console.log("Media dei voti degli studenti:", averageVoto);

// map
const mapStudents = studenti.map(student => student.nome.toUpperCase());
console.log("Nomi degli studenti in maiuscolo:", mapStudents);

// filter
const filteredStudents = studenti.filter(student => student.voto > 85);
console.log("Studenti con voti superiori a 85:", filteredStudents);
