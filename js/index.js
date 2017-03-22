var sharedbAce = require("sharedb-ace");
var SharedbAceRWControl = require("sharedb-ace-rw-control/client.js");

console.log(SharedbAceRWControl);

var editor = ace.edit("editor"); 
editor.setTheme("ace/theme/twilight");
var session = editor.getSession();
session.setMode("ace/mode/javascript");
session.setNewLineMode("unix");

var editor2 = ace.edit("editor2"); 
editor2.setTheme("ace/theme/twilight");
var session2 = editor2.getSession();
session2.setMode("ace/mode/javascript");
session2.setNewLineMode("unix"); 

function get(url, callback){
  var xmlhttp;
  // compatible with IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function(){
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
      callback(JSON.parse(xmlhttp.responseText));
    }
  }
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

get("http://localhost:3000/gists/latest", function(data) {
  var ShareAce = new sharedbAce("ws://localhost:3000/ws", "codepad", data.id, "ws://localhost:3108/ws");
  ShareAce.on('ready', function() {
    ShareAce.add(editor, ["code"], [ SharedbAceRWControl ]);
    ShareAce.add(editor2, ["testcases"], []); 
  });
})
