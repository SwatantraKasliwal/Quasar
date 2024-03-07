// List of Experiment
var intro = document.querySelector("#introduction");
var loe = document.querySelector("#list_of_experiments");
var sm = document.querySelector("#study_material");
var feed = document.querySelector("#feedback");
var lang = document.querySelector("#language");
var btn1 = document.querySelector("#btn1"); // list of experimnwets button
var btn2 = document.querySelector("#btn2"); // studymaterial button
var btn3 = document.querySelector("#btn3"); // language button
var btn4 = document.querySelector("#btn4"); // feedback button
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
    loe.style.transitionDelay  = "0.3s";
    sm.style.transitionDelay  = "0s";
    intro.style.transitionDelay  = "0s";
    feed.style.transitionDelay  = "0s";
    lang.style.transitionDelay  = "0s";
    btn1.style.borderBottom = "2px solid #dddada";
    btn2.style.borderBottom = "none";
    btn3.style.borderBottom = "none";
    btn4.style.borderBottom = "none";
}
function openStudyMaterial(){
    sm.style.transform  = "translateX(20px)";
    loe.style.transform  = "translateX(2000%)";
    intro.style.transform  = "translateX(2000%)";
    feed.style.transform  = "translateX(2000%)";
    lang.style.transform  = "translateX(2000%)";
    sm.style.transitionDelay  = "0.3s";
    loe.style.transitionDelay  = "0s";
    intro.style.transitionDelay  = "0s";
    feed.style.transitionDelay  = "0s";
    lang.style.transitionDelay  = "0s";
    btn2.style.borderBottom = "2px solid #dddada";
    btn1.style.borderBottom = "none";
    btn3.style.borderBottom = "none";
    btn4.style.borderBottom = "none";
}

function openLanguages(){
    lang.style.transform  = "translateX(10px)";
    sm.style.transform  = "translateX(2000%)";
    loe.style.transform  = "translateX(2000%)";
    intro.style.transform  = "translateX(2000%)";
    feed.style.transform  = "translateX(2000%)";
    lang.style.transitionDelay  = "0.3s";
    loe.style.transitionDelay  = "0s";
    sm.style.transitionDelay  = "0s";
    intro.style.transitionDelay  = "0s";
    feed.style.transitionDelay  = "0s";
    btn3.style.borderBottom = "2px solid #dddada";
    btn1.style.borderBottom = "none";
    btn2.style.borderBottom = "none";
    btn4.style.borderBottom = "none";
}
function openFeedback(){
    feed.style.transform  = "translateX(10px)";
    loe.style.transform  = "translateX(2000%)";
    lang.style.transform  = "translateX(2000%)";
    sm.style.transform  = "translateX(2000%)";
    intro.style.transform  = "translateX(2000%)";
    feed.style.transitionDelay  = "0.3s";
    loe.style.transitionDelay  = "0s";
    intro.style.transitionDelay  = "0s";
    sm.style.transitionDelay  = "0s";
    lang.style.transitionDelay  = "0s";
    btn4.style.borderBottom = "2px solid #dddada";
    btn1.style.borderBottom = "none";
    btn2.style.borderBottom = "none";
    btn3.style.borderBottom = "none";
}

function openTheory(){
    theory.style.transform  = "translateX(5px)";
    code.style.transform  = "translateX(200%)";
    visual.style.transform  = "translateX(200%)";
    theory.style.transitionDelay  = "0.3s";
    code.style.transitionDelay  = "0s";
    visual.style.transitionDelay  = "0s";
    theorybtn1.style.borderBottom = "2px solid #dddada";
    codebtn2.style.borderBottom = "none";
    visualbtn3.style.borderBottom = "none" ;
}
function openCode(){
    theory.style.transform  = "translateX(200%)";
    code.style.transform  = "translateX(10px)";
    visual.style.transform  = "translateX(200%)";
    theory.style.transitionDelay  = "0s";
    code.style.transitionDelay  = "0.3s";
    visual.style.transitionDelay  = "0s";
    codebtn2.style.borderBottom = "2px solid #dddada";
    theorybtn1.style.borderBottom = "none";
    visualbtn3.style.borderBottom = "none" ;
}
function openVisualisation(){
    theory.style.transform  = "translateX(200%)";
    visual.style.transform  = "translateX(10px)";
    code.style.transform  = "translateX(200%)";
    theory.style.transitionDelay  = "0s";
    visual.style.transitionDelay  = "0.3s";
    code.style.transitionDelay  = "0s";
    visualbtn3.style.borderBottom = "2px solid #dddada";
    theorybtn1.style.borderBottom = "none";
    codebtn2.style.borderBottom = "none" ;
}

// Practise Portion:

let ids = ['array_content', 'string_content', 'linkedlist_content', 'stackandqueue_content', 'tree_content', 'trie_content', 'heap_content', 'graph_content', 'dynamic_content', 'bitmanipulation_content'];
let buttons = ['qbtn0','qbtn1','qbtn2','qbtn3','qbtn4','qbtn5','qbtn6','qbtn7','qbtn8','qbtn9']

function openArray(){
for (let i = 0; i < ids.length && i<buttons.length; i++) {
    let element = document.getElementById(ids[i]);
    let btn = document.getElementById(buttons[i]);
    
    if (i === 0) {
        // Apply specific styles to the first element
        element.style.transform = "translateX(5px)";
        element.style.transitionDelay = "0.3s";
        btn.style.borderBottom = " 2px solid #dddada";
    } else {
        // Apply default styles to other elements
        element.style.transform = "translateX(5000%)";
        element.style.transitionDelay = "0s";
        btn.style.borderBottom = "none";
    }
}
}

function openString(){
    
    for (let i = 0; i < ids.length && i<buttons.length; i++) {
        let element = document.getElementById(ids[i]);
        let btn = document.getElementById(buttons[i]);
        
        if (i === 1) {
            // Apply specific styles to the first element
            element.style.transform = "translateX(5px)";
            element.style.transitionDelay = "0.3s";
            btn.style.borderBottom = " 2px solid #dddada";
        } else {
            // Apply default styles to other elements
            element.style.transform = "translateX(5000%)";
            element.style.transitionDelay = "0s";
            btn.style.borderBottom = "none";
        }
    }
}
function openLinkedList(){
    for (let i = 0; i < ids.length && i<buttons.length; i++) {
        let element = document.getElementById(ids[i]);
        let btn = document.getElementById(buttons[i]);
        
        if (i === 2) {
            // Apply specific styles to the first element
            element.style.transform = "translateX(5px)";
            element.style.transitionDelay = "0.3s";
            btn.style.borderBottom = " 2px solid #dddada";
        } else {
            // Apply default styles to other elements
            element.style.transform = "translateX(5000%)";
            element.style.transitionDelay = "0s";
            btn.style.borderBottom = "none";
        }
    }
}
function openStackQueue(){
    for (let i = 0; i < ids.length && i<buttons.length; i++) {
        let element = document.getElementById(ids[i]);
        let btn = document.getElementById(buttons[i]);
        
        if (i === 3) {
            // Apply specific styles to the first element
            element.style.transform = "translateX(5px)";
            element.style.transitionDelay = "0.3s";
            btn.style.borderBottom = " 2px solid #dddada";
        } else {
            // Apply default styles to other elements
            element.style.transform = "translateX(5000%)";
            element.style.transitionDelay = "0s";
            btn.style.borderBottom = "none";
        }
    }
}
function openTrees(){
    for (let i = 0; i < ids.length && i<buttons.length; i++) {
        let element = document.getElementById(ids[i]);
        let btn = document.getElementById(buttons[i]);
        
        if (i === 4) {
            // Apply specific styles to the first element
            element.style.transform = "translateX(5px)";
            element.style.transitionDelay = "0.3s";
            btn.style.borderBottom = " 2px solid #dddada";
        } else {
            // Apply default styles to other elements
            element.style.transform = "translateX(5000%)";
            element.style.transitionDelay = "0s";
            btn.style.borderBottom = "none";
        }
    }
}
function openTrie(){
    for (let i = 0; i < ids.length && i<buttons.length; i++) {
        let element = document.getElementById(ids[i]);
        let btn = document.getElementById(buttons[i]);
        
        if (i === 5) {
            // Apply specific styles to the first element
            element.style.transform = "translateX(5px)";
            element.style.transitionDelay = "0.3s";
            btn.style.borderBottom = " 2px solid #dddada";
        } else {
            // Apply default styles to other elements
            element.style.transform = "translateX(5000%)";
            element.style.transitionDelay = "0s";
            btn.style.borderBottom = "none";
        }
    }
}
function openHeap(){
    for (let i = 0; i < ids.length && i<buttons.length; i++) {
        let element = document.getElementById(ids[i]);
        let btn = document.getElementById(buttons[i]);
        
        if (i === 6) {
            // Apply specific styles to the first element
            element.style.transform = "translateX(5px)";
            element.style.transitionDelay = "0.3s";
            btn.style.borderBottom = " 2px solid #dddada";
        } else {
            // Apply default styles to other elements
            element.style.transform = "translateX(5000%)";
            element.style.transitionDelay = "0s";
            btn.style.borderBottom = "none";
        }
    }
}
function openGraph(){
    for (let i = 0; i < ids.length && i<buttons.length; i++) {
        let element = document.getElementById(ids[i]);
        let btn = document.getElementById(buttons[i]);
        
        if (i === 7) {
            // Apply specific styles to the first element
            element.style.transform = "translateX(5px)";
            element.style.transitionDelay = "0.3s";
            btn.style.borderBottom = " 2px solid #dddada";
        } else {
            // Apply default styles to other elements
            element.style.transform = "translateX(5000%)";
            element.style.transitionDelay = "0s";
            btn.style.borderBottom = "none";
        }
    }
}
function openDynamicProgramming(){
    for (let i = 0; i < ids.length && i<buttons.length; i++) {
        let element = document.getElementById(ids[i]);
        let btn = document.getElementById(buttons[i]);
        
        if (i === 8) {
            // Apply specific styles to the first element
            element.style.transform = "translateX(5px)";
            element.style.transitionDelay = "0.3s";
            btn.style.borderBottom = " 2px solid #dddada";
        } else {
            // Apply default styles to other elements
            element.style.transform = "translateX(5000%)";
            element.style.transitionDelay = "0s";
            btn.style.borderBottom = "none";
        }
    }
}
function openBitManipulation(){
    for (let i = 0; i < ids.length && i<buttons.length; i++) {
        let element = document.getElementById(ids[i]);
        let btn = document.getElementById(buttons[i]);
        
        if (i === 9) {
            // Apply specific styles to the first element
            element.style.transform = "translateX(5px)";
            element.style.transitionDelay = "0.3s";
            btn.style.borderBottom = " 2px solid #dddada";
        } else {
            // Apply default styles to other elements
            element.style.transform = "translateX(5000%)";
            element.style.transitionDelay = "0s";
            btn.style.borderBottom = "none";
        }
    }
}


// Feedback section starts here:
const scriptURL = 'https://script.google.com/macros/s/AKfycbzNvs64fbILWWr_DBIvkSF6gQxaz2fWoBWlStF5e05yIn-NCkI9Arnz_Wc0q160t7Ly6Q/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thank You For your valueable feedback "))
                .catch(error => console.error('Error!', error.message))
                form.reset();
            })











































            
// <script>
//             const scriptURL = 'https://script.google.com/macros/s/AKfycbzNvs64fbILWWr_DBIvkSF6gQxaz2fWoBWlStF5e05yIn-NCkI9Arnz_Wc0q160t7Ly6Q/exec'
//             const form = document.forms['google-sheet']
          
//             form.addEventListener('submit', e => {
//               e.preventDefault()
//               fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//                 .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
//                 .catch(error => console.error('Error!', error.message))
//             })
//           </script>


//=======================================================================================================================================================

// var sheetName = 'Sheet1'
// 		var scriptProp = PropertiesService.getScriptProperties()

// 		function intialSetup () {
// 		  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
// 		  scriptProp.setProperty('key', activeSpreadsheet.getId())
// 		}

// 		function doPost (e) {
// 		  var lock = LockService.getScriptLock()
// 		  lock.tryLock(10000)

// 		  try {
// 			var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
// 			var sheet = doc.getSheetByName(sheetName)

// 			var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
// 			var nextRow = sheet.getLastRow() + 1

// 			var newRow = headers.map(function(header) {
// 			  return header === 'timestamp' ? new Date() : e.parameter[header]
// 			})

// 			sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

// 			return ContentService
// 			  .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
// 			  .setMimeType(ContentService.MimeType.JSON)
// 		  }

// 		  catch (e) {
// 			return ContentService
// 			  .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
// 			  .setMimeType(ContentService.MimeType.JSON)
// 		  }

// 		  finally {
// 			lock.releaseLock()
// 		  }
// 		}
