const students = [
    { name: "Adhi", gender: "male" },
    { name: "Ahamed", gender: "male" },
    { name: "Rutika Kadam", gender: "female" },
    { name: "Priyadharsini", gender: "female" },
  ];
    
  // Task 1: find all female name
console.log(students.filter(x=>(x.gender=='female' )).map(x=>x.name)); 
  ["Rutika kadam", "Priyadharsini"];
  
  //Task 2: Starting with 'A'
console.log(students.filter(x=>(x.name[0]=='A' )).map(x=>x.name));  
  ["Adhi", "Ahamed"];
  
  // Task 3: Count the no. of males
console.log(students.filter(x=>(x.gender=='male')).length);   
  // 2
  