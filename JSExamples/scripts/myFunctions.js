function validateForm() {
    
    var name = document.getElementById("name").value;
    if (name == null || name == "") {
        alert("Animal name must be filled out");
        return false;
    }
    var age = document.getElementById("age").value;
    if (age == null || age == "") {
        alert("Animal age must be filled out");
        return false;
    }
    var desc = document.getElementById("desc").value;
    if (desc == null || desc == "") {
        alert("Animal description must be filled out");
        return false;
    }
    
    var breed = document.getElementById("breed").value;
    if (breed == null || breed == "") {
        alert("Animal breed must be filled out");
        return false;
    }
    var sex="";
    if(document.getElementById("female").checked)
        sex=document.getElementById("female").value;
    else
        sex=document.getElementById("male").value;

    saveAnimalInfo(name, age, desc, breed, sex);


    return true;
}

function saveAnimalInfo(name, age, desc,breed,sex){
    var id = Math.floor(Math.random()*100);
    var animal = {
        "id":id, 
        "name":name,
        "age":age,
        "desc":desc,
        "breed":breed,
        "sex":sex
    }

    if(localStorage){
        localStorage.setItem(id,JSON.stringify(animal));
    }

}




function printAnimals(){
    

    var text = "<table border='1'>";
    text += "<tr><th>Name</td><th>Breed</th><th>Age</th></tr>";
    
    if(localStorage){
        var count=localStorage.length;
        for(var i=0;i<count;i++){
            var key=localStorage.key(i);
            var animal=JSON.parse(localStorage.getItem(key));
            text += "<tr><td>"+animal.name+"</td><td>"+animal.breed+"</td><td>"+animal.age+"</td></tr>";

            console.log(animal);
        }
        
    }
    text += "</table>"
    document.getElementById("animals").innerHTML = text;
}
