function validateForm(){
    var sname=document.getElementById("student_name").value;
    var sid=document.getElementById("student_id").value;
    var semail=document.getElementById("student_email").value;
    var sprogram=document.getElementById("student_program").value;
    var className;
    var saddress=document.getElementById("address").value;
    var bdate=document.getElementById("bdate").value;

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
    if(sprogram==null||sprogram.length==0){
        alert("Please select program");
        return false;
    }
    
    if(document.getElementById("freshman").checked)
        className=document.getElementById("freshman").value;
    else if(document.getElementById("sophomore").checked)
        className=document.getElementById("sophomore").value;
    else if(document.getElementById("junior").checked)
        className=document.getElementById("junior").value;
    else if(document.getElementById("senior").checked)
        className=document.getElementById("senior").value;
    else{
        alert("Please select class name");
        return false;
    }  

    if(saddress==null||saddress.trim().length==0){
        alert("Please enter address");
        return false;
    }else{
        saddress=saddress.trim();
    }
    if(bdate==null||bdate.length==0){
        alert("Please select Birth Date");
        return false;
    }
    var student = {
        "id":sid, 
        "name":sname,
        "email":semail,
        "program":sprogram,
        "className":className,
        "birthDate":bdate,
        "address":saddress
    }
    console.log(student);
    saveStudent(student);
 return true;
}
function saveStudent(student) {
    if(localStorage){
        localStorage.setItem("mystudent",JSON.stringify(student));
        
    }else{
        alert("Sorry, your browser does not support local storage.");
    }
}

data={question1, question2, question3, question4, question5}
question={questionText,correctAnswer,studentAnswer}

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




