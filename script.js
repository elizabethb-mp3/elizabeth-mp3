var factList = [
  "The mental health of students today is far worse than before and most believe that school is a catalyst.",
  "The school system today was built off of racist ideals. They still take effect in the curriculums taught today.",
  "The United States' school system was made during the Industrial Revolution. (almost 200 years ago!)",
  "The K-12 public schools in the United States are severely underfunded and continues to decrease year by year."
];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
