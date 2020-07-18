let name = document.getElementById("name");
let clas = document.getElementById("class");
let enroll = document.getElementById("enroll");
let submit = document.getElementById("submit");
let math5 = document.getElementById("math5");
let science5 = document.getElementById("sci5");
let hindi5 = document.getElementById("hnd5");
let english5 = document.getElementById("eng5");
let math10 = document.getElementById("math10");
let science10 = document.getElementById("sci10");
let hindi10 = document.getElementById("hnd10");
let english10 = document.getElementById("eng10");
let social10 = document.getElementById("sos10");
let sanskrit10 = document.getElementById("sans10");
let detail = document.getElementById("detail");
let marks5 = document.getElementById("marks5");
let marks10 = document.getElementById("marks10");
let result = document.getElementById("result");
let calculate1 = document.getElementById("calcy1");
let calculate2 = document.getElementById("calcy2");
var totalmarks = 0;
var percentage;
var grade;
var status;


submit.addEventListener('click',cm);
calculate1.addEventListener('click',totalmark5);
calculate2.addEventListener('click',totalmark10);

function cm(){
    detail.style.display ='none';
    if(clas.value > 0 && clas.value <6){
        marks5.style.display = 'block';
    }
    else if(clas.value >= 6 && clas.value < 10){
        marks10.style.display = 'block';
    }
    else{
        alert("Enter valid detail");
        detail.style.display ='block';
    }
}

function totalmark5(){
    totalmarks =parseFloat(math5.value)+parseFloat(science5.value)+ parseFloat(hindi5.value)+parseFloat(english5.value);
    percentage = (totalmarks/400)*100;
    marks5.style.display = 'none';
    grades();
    result.innerHTML = `<h1>Result</h1>
    <span><label for="Name">Name :-</label> <label for="Name">${name.value}</label></span>
    <span><label for="class">Class :-</label> <label for="Class">${clas.value}</label></span>
    <span><label for="enroll">Enrollment no. :-</label> <label for="Class">${enroll.value}</label></span>
    <span><label for="total">Total marks :-</label> <label for="total">${totalmarks}/400</label></span>
    <span><label for="grade">Grade :-</label> <label for="grade">${grade}</label></span>
    <span><label for="status">Status :-</label> <label for="status">${status}</label></span>
`;
}

function totalmark10(){
    totalmarks =parseFloat(math10.value)+parseFloat (science10.value)+ parseFloat(hindi10.value)+parseFloat(english10.value)+ parseFloat(social10.value)+parseFloat(sanskrit10.value);
    percentage = (totalmarks/600)*100;
    marks10.style.display = 'none';
    grades();
    result.innerHTML = `<h1>Result</h1>
    <span><label for="Name">Name :-</label> <label for="Name">${name.value}</label></span>
    <span><label for="class">Class :-</label> <label for="Class">${clas.value}</label></span>
    <span><label for="enroll">Enrollment no. :-</label> <label for="Class">${enroll.value}</label></span>
    <span><label for="total">Total marks :-</label> <label for="total">${totalmarks}/600</label></span>
    <span><label for="grade">Grade :-</label> <label for="grade">${grade}</label></span>
    <span><label for="status">Status :-</label> <label for="status">${status}</label></span>
`;
}

function grades(){

    if(percentage >= 90 && percentage <=100){
        grade ='A';
        status = 'Excellent';
    }
    else if(percentage >= 80 && percentage <=90){
        grade = 'A';
        status = 'very good';
    }
    else if(percentage >= 60 && percentage <=80){
        grade = 'B';
        status = 'not bad';
    }
    else if(percentage >= 40 && percentage <=60){
        grade = 'C';
        status = 'poor';
    }
    else {
        grade = 'F';
        status = 'Fail';
    }

}














    