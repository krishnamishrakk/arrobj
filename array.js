let studentRecords = [
    { name: "John", id: 123, marks: 98 },
    { name: "Baba", id: 101, marks: 23 },
    { name: "yaga", id: 200, marks: 45 },
    { name: "Wick", id: 115, marks: 75 },
  ];
  
  //Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.
  //['JOHN', 'BABA', 'YAGA', 'WICK']
  //Ans:-
  let names = [];
  studentRecords.forEach((student) => {
    names.push(student.name.toUpperCase());
  });
  console.log(names);
  //Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.
  //[{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]
  //Ans:-
  let names2 = studentRecords.filter((stu) => stu.marks > 50);
  console.log(names2);
  //Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.
  //[ { name: 'John', id: 123, marks: 98 } ]
  //Ans:-
  let names3 = studentRecords.filter((stu) => stu.marks > 50 && stu.id > 120);
  console.log(names3);
  //Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.
  //241
  //Ans:-
  let totalMarks = studentRecords.reduce((s, m) => s + m.marks, 0);
  console.log(totalMarks);
  //Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.
  //[ 'John', 'Wick' ]
  //Ans:-
  let names4 = studentRecords
    .filter((stu) => stu.marks > 50)
    .map((stu) => stu.name);
  console.log(names4);
  //Question 6: This time we are required to print the sum of marks of the students with id > 120.
  //143
  //Ans:-
  let totalMarks2 = studentRecords
    .filter((stu) => stu.id > 120)
    .reduce((acc, curr) => acc + curr.marks, 0);
  console.log(totalMarks2);
  
  //Question 7: This time we are required to print the total marks of the students with marks greater
  //than 50 after a grace of 15 marks has been added to those students who scored less than 50.
  //233
  //Ans:-
  let totalMarks3 = studentRecords
    .map(function (stu) {
      if (stu.marks < 50) {
        stu.marks += 15;
      }
      return stu;
    })
    .filter((stu) => stu.marks > 50)
    .reduce((acc, curr) => acc + curr.marks, 0);
  console.log(totalMarks3);
  
  //Question 8:Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects.
  //Ans:-
  let obj1 = { name: "krishna", class: "X", rollno: "37" };
  let obj2 = { name: "kk", class: "XI", rollno: "40" };
  let obj3 = { name: "Varun", class: "XII", rollno: "45" };
  let obj4 = { name: "Prachi", class: "XI", rollno: "48" };
  let obj5 = { name: "Priya", class: "X", rollno: "07" };
  let obj6 = { name: "priyanka", class: "XII", rollno: "18" };
  
  let students = [
    { name: "krishna", class: "X", rollno: "37" },
    { name: "kk", class: "XI", rollno: "40" },
    { name: "Varun", class: "XII", rollno: "45" },
    { name: "Prachi", class: "XI", rollno: "48" },
    { name: "Priya", class: "X", rollno: "07" },
    { name: "priyanka", class: "XII", rollno: "18" },
  ];
  console.log(students)
//  let names=[];
// studentRecords.map((kk)=>{
//     names.push(kk.name.toUpperCase())
// })
// console.log(names);

// let names2= studentRecords.filter((i)=>
//     i.marks>50)
// console.log(names2);
// let name3= studentRecords.filter((k)=>
// k.marks>50 && k.id>120);
// console.log(name3);

// let sum= studentRecords.reduce((r,s)=>
// r+s.marks,0)
// console.log(sum);
// let stu= studentRecords.filter((i)=>i.marks>50).map((i)=>i.name);
// console.log(stu);
// let sm= studentRecords.filter((p)=>
//   p.id>120).reduce((p,k)=>
//   p+k.marks,0);
//   console.log(sm)
