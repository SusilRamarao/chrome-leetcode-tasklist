
document.body.style.border = "5px solid red";

var arr = [], l = document.links;

for(var i=0; i<l.length; i++) {
  arr.push(l[i].href);
}

for(var i = 0; i < arr.length; i++){

    const temp = arr[i];
    const wordMatchRegExp = /leetcode.com/g; 
    const word = temp.match(wordMatchRegExp);
    if(word){
        var array = arr[i].split('/');
        if(!array[array.length - 1]){

            var lastsegment = array[array.length-2];
        }
        else{

            var lastsegment = array[array.length-1];
        }
        
        console.debug(lastsegment);
    }
    
}


var leetcodeURL = "https://leetcode.com/";
//var x = document.cookie;
/*
fetch(leetcodeURL).then(function(response) {
  return response.json();
}).then(function(data) {
  console.log(data);
}).catch(function() {
  console.log("Booo");
});
*/

const opts = {
  method: 'GET',
  credentials: 'include',
  headers: {
      cookie: 'LEETCODE_SESSION:'
  }
};

fetch(leetcodeURL, opts)
.then(res => res.json())
.then(out =>
  console.debug('Checkout this JSON! ', out))
.catch(err => { 
  console.debug("Ola ");
  console.debug(err); });

/*
for(var i = 0; i < x.length; i++){

  console.debug(x[i]);
}*/


var leetcodeProblemURL = "https://leetcode.com/api/problems/algorithms/";
/*
var temp;
fetch(leetcodeURL)
//.then(res => res.json())
.then(out =>
  console.debug('Checkout this JSON! ', out))
.catch(err => { console.debug(err) });

console.debug
*/
/*
var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.mode = "no-cors";
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    console.debug("Send")
    xhr.send();
};

getJSON(leetcodeURL,
function(err, data) {
  if (err !== null) {
    console.debug('Something went wrong: ' + err);
  } else {
    console.debug('Your query count: ' + data.query.count);
  }
});

*/

/*
let data = {
    query: "\n query userProblemsSolved($username: String!) {\n allQuestionsCount {\n difficulty\n count\n } \n matchedUser(username: $username) {\n problemsSolvedBeatsStats {\n difficulty\n percentage\n }\n subm itStatsGlobal {\n acSubmissionNum {\n difficulty\n count\n }\n }\n }\n}\n ",
    variables: {
    username: susil95,
    }
}

fetch(leetcodeURL, {
    method: "POST",
    headers: {'Content-Type': 'application/json', 'mode':'no-cors'}, 
    body: JSON.stringify(data)
  }).then(res => {
    console.debug("Request complete! response:", res.json());
    }).then(out =>
        console.debug('Checkout this JSON! ', out));

*/

/*
var xhr = new XMLHttpRequest();
xhr.open("POST", leetcodeURL, true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify(data));
*/

/*
const article = document.querySelector("article");

// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g; // Regular expression
  const words = text.matchAll(wordMatchRegExp);
  // matchAll returns an iterator, convert to array to get word count
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement("p");
  // Use the same styling as the publish information in an article's header
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️ ${readingTime} min read`;

  // Support for API reference docs
  const heading = article.querySelector("h1");
  // Support for article docs with date
  const date = article.querySelector("time")?.parentNode;

  (date ?? heading).insertAdjacentElement("afterend", badge);
}
*/