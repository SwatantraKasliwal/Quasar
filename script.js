// List of Experiment
var intro = document.querySelector("#introduction");
var loe = document.querySelector("#list_of_experiments");
var sm = document.querySelector("#study_material");
var feed = document.querySelector("#feedback");
var lang = document.querySelector("#language");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");
var btn5 = document.querySelector("#btn5");
var theory = document.querySelector("#theory");
var code = document.querySelector("#main_code");
var visual = document.querySelector("#visual");
var theorybtn1 = document.querySelector("#theorybtn1");
var codebtn2 = document.querySelector("#codebtn2");
var visualbtn3 = document.querySelector("#visualbtn3");


function openListOfExp(){
    loe.style.transform  = "translateX(5px)";
    intro.style.transform  = "translateX(2000%)";
    sm.style.transform  = "translateX(2000%)";
    feed.style.transform  = "translateX(2000%)";
    lang.style.transform  = "translateX(2000%)";
    btn1.style.color = "red";
    btn2.style.color = "black";
    btn3.style.color = "black";
    btn4.style.color = "black";
    loe.style.transitionDelay  = "0.3s";
    sm.style.transitionDelay  = "0s";
    intro.style.transitionDelay  = "0s";
    feed.style.transitionDelay  = "0s";
    lang.style.transitionDelay  = "0s";
}
function openStudyMaterial(){
    sm.style.transform  = "translateX(20px)";
    loe.style.transform  = "translateX(2000%)";
    intro.style.transform  = "translateX(2000%)";
    feed.style.transform  = "translateX(2000%)";
    lang.style.transform  = "translateX(2000%)";
    btn2.style.color = "red";
    btn3.style.color = "black";
    btn1.style.color = "black";
    btn4.style.color = "black";
    sm.style.transitionDelay  = "0.3s";
    loe.style.transitionDelay  = "0s";
    intro.style.transitionDelay  = "0s";
    feed.style.transitionDelay  = "0s";
    lang.style.transitionDelay  = "0s";
}

function openLanguages(){
    lang.style.transform  = "translateX(10px)";
    sm.style.transform  = "translateX(2000%)";
    loe.style.transform  = "translateX(2000%)";
    intro.style.transform  = "translateX(2000%)";
    feed.style.transform  = "translateX(2000%)";
    btn3.style.color = "red";
    btn2.style.color = "black";
    btn1.style.color = "black";
    btn4.style.color = "black";
    lang.style.transitionDelay  = "0.3s";
    loe.style.transitionDelay  = "0s";
    sm.style.transitionDelay  = "0s";
    intro.style.transitionDelay  = "0s";
    feed.style.transitionDelay  = "0s";
}
function openFeedback(){
    feed.style.transform  = "translateX(10px)";
    loe.style.transform  = "translateX(2000%)";
    lang.style.transform  = "translateX(2000%)";
    sm.style.transform  = "translateX(2000%)";
    intro.style.transform  = "translateX(2000%)";
    btn4.style.color = "red";
    btn2.style.color = "black";
    btn3.style.color = "black";
    btn1.style.color = "black";
    feed.style.transitionDelay  = "0.3s";
    loe.style.transitionDelay  = "0s";
    intro.style.transitionDelay  = "0s";
    sm.style.transitionDelay  = "0s";
    lang.style.transitionDelay  = "0s";

}

function openTheory(){
    theory.style.transform  = "translateX(5px)";
    code.style.transform  = "translateX(200%)";
    visual.style.transform  = "translateX(200%)";
    theorybtn1.style.color = "red";
    codebtn2.style.color = "black"
    visualbtn3.style.color = "black";
    theory.style.transitionDelay  = "0.3s";
    code.style.transitionDelay  = "0s";
    visual.style.transitionDelay  = "0s";
}
function openCode(){
    theory.style.transform  = "translateX(200%)";
    code.style.transform  = "translateX(10px)";
    visual.style.transform  = "translateX(200%)";
    codebtn2.style.color = "red";
    theorybtn1.style.color = "black";
    visualbtn3.style.color = "black";
    theory.style.transitionDelay  = "0s";
    code.style.transitionDelay  = "0.3s";
    visual.style.transitionDelay  = "0s";
}
function openVisualisation(){
    theory.style.transform  = "translateX(200%)";
    visual.style.transform  = "translateX(10px)";
    code.style.transform  = "translateX(200%)";
    codebtn2.style.color = "black";
    theorybtn1.style.color = "black";
    visualbtn3.style.color = "red";
    theory.style.transitionDelay  = "0s";
    visual.style.transitionDelay  = "0.3s";
    code.style.transitionDelay  = "0s";
}


