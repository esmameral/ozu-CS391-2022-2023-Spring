function validateForm(){
    var sname=document.getElementById("student_name").value;
    var sid=document.getElementById("student_id").value;
    var semail=document.getElementById("student_email").value;
    
    if(sname==null||sname.length==0){
        alert("Please enter student name");
        return false;
    }
    if(sid==null||sid.length==0){
        alert("Please enter student id");
        return false;
    }else{
        if(sid.substring(0, 1)!=="S"){
            alert("Your ID should start with S!!");
            return false;
        }
        if(sid.length!=7){
            alert("You must enter 7 letters");
            return false;
        }
    }


    var student = {
        "id":sid, 
        "name":sname,
        "email":semail
    }
    console.log(student);
    saveStudent(student);
 return true;
}
//localStorage.setItem(id,JSON.stringify(animal));
function saveStudent(student) {
    if(localStorage){
        localStorage.setItem("mystudent",JSON.stringify(student));
        
    }else{
        alert("Sorry, your browser does not support local storage.");
    }
}

function printWelcomeMessage() {
    if(localStorage){
        var student = JSON.parse(localStorage.getItem("mystudent"));
        var name=student.name;
        console.log("name:"+name);
        document.getElementById("welcome").innerHTML="Hello "+ name+", welcome to our school";
        
    }else{
         alert("Sorry, your browser does not support local storage.");
    }
}




