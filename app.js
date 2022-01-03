var student1 = {
  name: "Sufyan",
  Fathername: "irfan",
  class: 10,
  contact: "03212393989",
};

var student2 = {
  name: "Ashal",
  Fathername: "Sufyan",
  class: 10,
  contact: "03212393989",
};

var student3 = {
  name: "Ali",
  Fathername: "Ahmed",
  class: 10,
  contact: "03212393989",
};

var student4 = {
  name: "osama",
  Fathername: "Ashfaq",
  class: 10,
  contact: "03212393989",
};

var student5 = {
  name: "Hamza",
  Fathername: "Munir",
  class: 10,
  contact: "03212393989",
};

var studentlist = [student1, student2, student3, student4, student5];
for (var i = 0; i < studentlist.length; i++) {
  studentlist[i].rollno = i + 1;
}
var std = document.getElementById("studentdata");
for (var i = 0; i < studentlist.length; i++) {
  var obj = studentlist[i];
  console.log(obj);
  std.innerHTML +=
    "<tr><td>" +
    obj.rollno +
    "</td><td>" +
    obj.name +
    "</td><td>" +
    obj.Fathername +
    "</td><td>" +
    obj.class +
    "</td><td>" +
    obj.contact +
    "</td></tr>";
}

function searchstd() {
  var ipval = document.getElementById("ipval");
  var showrollno = document.getElementById("showrollno");
  var showname = document.getElementById("showname");
  var showfathername = document.getElementById("showfathername");
  var showclass = document.getElementById("showclass");
  var showcontact = document.getElementById("showcontact");

  for (var i = 0; i < studentlist.length; i++) {
    var std = studentlist[i];
    if (ipval.value == std.rollno) {
      
      showrollno.innerHTML = std.rollno;
      showname.innerHTML = std.name;
      showfathername.innerHTML = std.Fathername;
      showclass.innerHTML = std.class;
      showcontact.innerHTML = std.contact;
    }
  }
}
