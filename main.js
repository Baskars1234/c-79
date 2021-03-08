 var name_of_all_the_students = [];

function submit() {
       

    var Name_1 = document.getElementById("name_of_the_student_1").value;
    var Name_2 = document.getElementById("name_of_the_student_2").value;
    var Name_3 = document.getElementById("name_of_the_student_3").value;
    var Name_4 = document.getElementById("name_of_the_student_4").value;

    name_of_all_the_students.push(Name_1);
    name_of_all_the_students.push(Name_2);
    name_of_all_the_students.push(Name_3);
    name_of_all_the_students.push(Name_4);
   
    console.log(name_of_all_the_students);

    document.getElementById("display_name").innerHTML = name_of_all_the_students;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block"; 
}

function sorting() {
   name_of_all_the_students.sort();
   console.log(name_of_all_the_students);
   document.getElementById("display_name").innerHTML = name_of_all_the_students;
}