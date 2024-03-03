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

// Practise Portion:
var array = document.querySelector("#array_content");
var string = document.querySelector("#string_content");
var linkedlist = document.querySelector("#linkedlist_content");
var stacknqueue = document.querySelector("#stackandqueue_content");
var tree = document.querySelector("#tree_content");
var trie = document.querySelector("#trie_content");
var heap = document.querySelector("#heap_content");
var graph = document.querySelector("#graph_content");
var dynamic = document.querySelector("#dynamic_content");
var bitmanipulation = document.querySelector("#bitmanipulation_content");
var qbtn1 = document.querySelector("#qbtn1");
var qbtn2 = document.querySelector("#qbtn2");
var qbtn3 = document.querySelector("#qbtn3");
var qbtn4 = document.querySelector("#qbtn4");
var qbtn5 = document.querySelector("#qbtn5");
var qbtn6 = document.querySelector("#qbtn6");
var qbtn7 = document.querySelector("#qbtn7");
var qbtn8 = document.querySelector("#qbtn8");
var qbtn9 = document.querySelector("#qbtn9");
var qbtn10 = document.querySelector("#qbtn10");

function openArray(){
    array.style.transform = "translateX(5px)";
    string.style.transform = "translateX(5000%)";
    linkedlist.style.transform = "translateX(5000%)";
    stacknqueue.style.transform = "translateX(5000%)";
    tree.style.transform = "translateX(5000%)";
    trie.style.transform = "translateX(5000%)";
    heap.style.transform = "translateX(5000%)";
    graph.style.transform = "translateX(5000%)";
    dynamic.style.transform = "translateX(5000%)";
    bitmanipulation.style.transform = "translateX(5000%)";
    array.style.transitionDelay = "0.3s";
    string.style.transitionDelay = "0s";
    linkedlist.style.transitionDelay = "0s";
    stacknqueue.style.transitionDelay = "0s";
    tree.style.transitionDelay = "0s";
    trie.style.transitionDelay = "0s";
    heap.style.transitionDelay = "0s";
    heap.style.transitionDelay = "0s";
    graph.style.transitionDelay = "0s";
    dynamic.style.transitionDelay = "0s";
    bitmanipulation.style.transitionDelay = "0s";
    qbtn1.style.color = "red";
    qbtn2.style.color = "black";
    qbtn3.style.color = "black";
    qbtn4.style.color = "black";
    qbtn5.style.color = "black";
    qbtn6.style.color = "black";
    qbtn7.style.color = "black";
    qbtn8.style.color = "black";
    qbtn9.style.color = "black";
    qbtn10.style.color = "black";
}
function openString(){
    string.style.transform = "translateX(5px)";
    array.style.transform = "translateX(5000%)";
    linkedlist.style.transform = "translateX(5000%)";
    stacknqueue.style.transform = "translateX(5000%)";
    tree.style.transform = "translateX(5000%)";
    trie.style.transform = "translateX(5000%)";
    heap.style.transform = "translateX(5000%)";
    graph.style.transform = "translateX(5000%)";
    dynamic.style.transform = "translateX(5000%)";
    bitmanipulation.style.transform = "translateX(5000%)";
    string.style.transitionDelay = "0.3s";
    array.style.transitionDelay = "0s";
    linkedlist.style.transitionDelay = "0s";
    stacknqueue.style.transitionDelay = "0s";
    tree.style.transitionDelay = "0s";
    trie.style.transitionDelay = "0s";
    heap.style.transitionDelay = "0s";
    heap.style.transitionDelay = "0s";
    graph.style.transitionDelay = "0s";
    dynamic.style.transitionDelay = "0s";
    bitmanipulation.style.transitionDelay = "0s";
    qbtn2.style.color = "red";
    qbtn1.style.color = "black";
    qbtn3.style.color = "black";
    qbtn4.style.color = "black";
    qbtn5.style.color = "black";
    qbtn6.style.color = "black";
    qbtn7.style.color = "black";
    qbtn8.style.color = "black";
    qbtn9.style.color = "black";
    qbtn10.style.color = "black";
}
function openLinkedList(){
    linkedlist.style.transform = "translateX(5px)";
    array.style.transform = "translateX(5000%)";
    string.style.transform = "translateX(5000%)";
    stacknqueue.style.transform = "translateX(5000%)";
    tree.style.transform = "translateX(5000%)";
    trie.style.transform = "translateX(5000%)";
    heap.style.transform = "translateX(5000%)";
    graph.style.transform = "translateX(5000%)";
    dynamic.style.transform = "translateX(5000%)";
    bitmanipulation.style.transform = "translateX(5000%)";
    linkedlist.style.transitionDelay = "0.3s";
    array.style.transitionDelay = "0s";
    string.style.transitionDelay = "0s";
    stacknqueue.style.transitionDelay = "0s";
    tree.style.transitionDelay = "0s";
    trie.style.transitionDelay = "0s";
    heap.style.transitionDelay = "0s";
    heap.style.transitionDelay = "0s";
    graph.style.transitionDelay = "0s";
    dynamic.style.transitionDelay = "0s";
    bitmanipulation.style.transitionDelay = "0s";
    qbtn3.style.color = "red";
    qbtn1.style.color = "black";
    qbtn2.style.color = "black";
    qbtn4.style.color = "black";
    qbtn5.style.color = "black";
    qbtn6.style.color = "black";
    qbtn7.style.color = "black";
    qbtn8.style.color = "black";
    qbtn9.style.color = "black";
    qbtn10.style.color = "black";
}
function openStackQueue(){
    stacknqueue.style.transform = "translateX(5px)";
    array.style.transform = "translateX(5000%)";
    linkedlist.style.transform = "translateX(5000%)";
    string.style.transform = "translateX(5000%)";
    tree.style.transform = "translateX(5000%)";
    trie.style.transform = "translateX(5000%)";
    heap.style.transform = "translateX(5000%)";
    graph.style.transform = "translateX(5000%)";
    dynamic.style.transform = "translateX(5000%)";
    bitmanipulation.style.transform = "translateX(5000%)";
    stacknqueue.style.transitionDelay = "0.3s";
    array.style.transitionDelay = "0s";
    linkedlist.style.transitionDelay = "0s";
    string.style.transitionDelay = "0s";
    tree.style.transitionDelay = "0s";
    trie.style.transitionDelay = "0s";
    heap.style.transitionDelay = "0s";
    heap.style.transitionDelay = "0s";
    graph.style.transitionDelay = "0s";
    dynamic.style.transitionDelay = "0s";
    bitmanipulation.style.transitionDelay = "0s";
    qbtn4.style.color = "red";
    qbtn1.style.color = "black";
    qbtn3.style.color = "black";
    qbtn2.style.color = "black";
    qbtn5.style.color = "black";
    qbtn6.style.color = "black";
    qbtn7.style.color = "black";
    qbtn8.style.color = "black";
    qbtn9.style.color = "black";
    qbtn10.style.color = "black";
}
function openTrees(){
    tree.style.transform = "translateX(5px)";
    array.style.transform = "translateX(5000%)";
    string.style.transform = "translateX(5000%)";
    stacknqueue.style.transform = "translateX(5000%)";
    linkedlist.style.transform = "translateX(5000%)";
    trie.style.transform = "translateX(5000%)";
    heap.style.transform = "translateX(5000%)";
    graph.style.transform = "translateX(5000%)";
    dynamic.style.transform = "translateX(5000%)";
    bitmanipulation.style.transform = "translateX(5000%)";
    tree.style.transitionDelay = "0.3s";
    array.style.transitionDelay = "0s";
    string.style.transitionDelay = "0s";
    stacknqueue.style.transitionDelay = "0s";
    linkedlist.style.transitionDelay = "0s";
    trie.style.transitionDelay = "0s";
    heap.style.transitionDelay = "0s";
    heap.style.transitionDelay = "0s";
    graph.style.transitionDelay = "0s";
    dynamic.style.transitionDelay = "0s";
    bitmanipulation.style.transitionDelay = "0s";
    qbtn5.style.color = "red";
    qbtn1.style.color = "black";
    qbtn2.style.color = "black";
    qbtn3.style.color = "black";
    qbtn4.style.color = "black";
    qbtn6.style.color = "black";
    qbtn7.style.color = "black";
    qbtn8.style.color = "black";
    qbtn9.style.color = "black";
    qbtn10.style.color = "black";
}
function openTrie(){
    trie.style.transform = "translateX(5px)";
    array.style.transform = "translateX(5000%)";
    string.style.transform = "translateX(5000%)";
    stacknqueue.style.transform = "translateX(5000%)";
    linkedlist.style.transform = "translateX(5000%)";
    tree.style.transform = "translateX(5000%)";
    heap.style.transform = "translateX(5000%)";
    graph.style.transform = "translateX(5000%)";
    dynamic.style.transform = "translateX(5000%)";
    bitmanipulation.style.transform = "translateX(5000%)";
    trie.style.transitionDelay = "0.3s";
    array.style.transitionDelay = "0s";
    string.style.transitionDelay = "0s";
    stacknqueue.style.transitionDelay = "0s";
    linkedlist.style.transitionDelay = "0s";
    tree.style.transitionDelay = "0s";
    heap.style.transitionDelay = "0s";
    heap.style.transitionDelay = "0s";
    graph.style.transitionDelay = "0s";
    dynamic.style.transitionDelay = "0s";
    bitmanipulation.style.transitionDelay = "0s";
    qbtn6.style.color = "red";
    qbtn1.style.color = "black";
    qbtn2.style.color = "black";
    qbtn3.style.color = "black";
    qbtn4.style.color = "black";
    qbtn5.style.color = "black";
    qbtn7.style.color = "black";
    qbtn8.style.color = "black";
    qbtn9.style.color = "black";
    qbtn10.style.color = "black";
}
function openHeap(){
    heap.style.transform = "translateX(5px)";
    array.style.transform = "translateX(5000%)";
    string.style.transform = "translateX(5000%)";
    stacknqueue.style.transform = "translateX(5000%)";
    linkedlist.style.transform = "translateX(5000%)";
    tree.style.transform = "translateX(5000%)";
    trie.style.transform = "translateX(5000%)";
    graph.style.transform = "translateX(5000%)";
    dynamic.style.transform = "translateX(5000%)";
    bitmanipulation.style.transform = "translateX(5000%)";
    heap.style.transitionDelay = "0.3s";
    array.style.transitionDelay = "0s";
    string.style.transitionDelay = "0s";
    stacknqueue.style.transitionDelay = "0s";
    linkedlist.style.transitionDelay = "0s";
    tree.style.transitionDelay = "0s";
    trie.style.transitionDelay = "0s";
    graph.style.transitionDelay = "0s";
    dynamic.style.transitionDelay = "0s";
    bitmanipulation.style.transitionDelay = "0s";
    qbtn7.style.color = "red";
    qbtn1.style.color = "black";
    qbtn2.style.color = "black";
    qbtn3.style.color = "black";
    qbtn4.style.color = "black";
    qbtn5.style.color = "black";
    qbtn6.style.color = "black";
    qbtn8.style.color = "black";
    qbtn9.style.color = "black";
    qbtn10.style.color = "black";
}
function openGraph(){
    graph.style.transform = "translateX(5px)";
    array.style.transform = "translateX(5000%)";
    string.style.transform = "translateX(5000%)";
    stacknqueue.style.transform = "translateX(5000%)";
    linkedlist.style.transform = "translateX(5000%)";
    tree.style.transform = "translateX(5000%)";
    trie.style.transform = "translateX(5000%)";
    heap.style.transform = "translateX(5000%)";
    dynamic.style.transform = "translateX(5000%)";
    bitmanipulation.style.transform = "translateX(5000%)";
    graph.style.transitionDelay = "0.3s";
    array.style.transitionDelay = "0s";
    string.style.transitionDelay = "0s";
    stacknqueue.style.transitionDelay = "0s";
    linkedlist.style.transitionDelay = "0s";
    tree.style.transitionDelay = "0s";
    trie.style.transitionDelay = "0s";
    heap.style.transitionDelay = "0s";
    dynamic.style.transitionDelay = "0s";
    bitmanipulation.style.transitionDelay = "0s";
    qbtn8.style.color = "red";
    qbtn1.style.color = "black";
    qbtn2.style.color = "black";
    qbtn3.style.color = "black";
    qbtn4.style.color = "black";
    qbtn5.style.color = "black";
    qbtn6.style.color = "black";
    qbtn7.style.color = "black";
    qbtn9.style.color = "black";
    qbtn10.style.color = "black";
}
function openDynamicProgramming(){
    dynamic.style.transform = "translateX(5px)";
    array.style.transform = "translateX(5000%)";
    string.style.transform = "translateX(5000%)";
    stacknqueue.style.transform = "translateX(5000%)";
    linkedlist.style.transform = "translateX(5000%)";
    tree.style.transform = "translateX(5000%)";
    trie.style.transform = "translateX(5000%)";
    heap.style.transform = "translateX(5000%)";
    graph.style.transform = "translateX(5000%)";
    bitmanipulation.style.transform = "translateX(5000%)";
    dynamic.style.transitionDelay = "0.3s";
    array.style.transitionDelay = "0s";
    string.style.transitionDelay = "0s";
    stacknqueue.style.transitionDelay = "0s";
    linkedlist.style.transitionDelay = "0s";
    tree.style.transitionDelay = "0s";
    trie.style.transitionDelay = "0s";
    heap.style.transitionDelay = "0s";
    graph.style.transitionDelay = "0s";
    bitmanipulation.style.transitionDelay = "0s";
    qbtn9.style.color = "red";
    qbtn1.style.color = "black";
    qbtn2.style.color = "black";
    qbtn3.style.color = "black";
    qbtn4.style.color = "black";
    qbtn5.style.color = "black";
    qbtn6.style.color = "black";
    qbtn7.style.color = "black";
    qbtn8.style.color = "black";
    qbtn10.style.color = "black";
}
function openBitManipulation(){
    bitmanipulation.style.transform = "translateX(5px)";
    array.style.transform = "translateX(5000%)";
    string.style.transform = "translateX(5000%)";
    stacknqueue.style.transform = "translateX(5000%)";
    linkedlist.style.transform = "translateX(5000%)";
    tree.style.transform = "translateX(5000%)";
    trie.style.transform = "translateX(5000%)";
    heap.style.transform = "translateX(5000%)";
    graph.style.transform = "translateX(5000%)";
    dynamic.style.transform = "translateX(5000%)";
    bitmanipulation.style.transitionDelay = "0.3s";
    array.style.transitionDelay = "0s";
    string.style.transitionDelay = "0s";
    stacknqueue.style.transitionDelay = "0s";
    linkedlist.style.transitionDelay = "0s";
    tree.style.transitionDelay = "0s";
    trie.style.transitionDelay = "0s";
    heap.style.transitionDelay = "0s";
    graph.style.transitionDelay = "0s";
    dynamic.style.transitionDelay = "0s";
    qbtn10.style.color = "red";
    qbtn1.style.color = "black";
    qbtn2.style.color = "black";
    qbtn3.style.color = "black";
    qbtn4.style.color = "black";
    qbtn5.style.color = "black";
    qbtn6.style.color = "black";
    qbtn7.style.color = "black";
    qbtn8.style.color = "black";
    qbtn9.style.color = "black";
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbzNvs64fbILWWr_DBIvkSF6gQxaz2fWoBWlStF5e05yIn-NCkI9Arnz_Wc0q160t7Ly6Q/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
                .catch(error => console.error('Error!', error.message))
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


// =============================================================================

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
