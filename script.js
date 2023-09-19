// let input = prompt("Enter a text ");
// input = input.toUpperCase();
// document.querySelector("#header1").textContent = input;

function count(sentence, countInput) {
    let sentenceArray = sentence.split(" "); 
    let count = 0; 
    for (let i = 0; i < sentenceArray.length; i++) { 
      if (sentenceArray[i] === countInput) { 
        count = count + 1;
      }
    }
    return count;
  }
  
  let a = count("My name is Shubham and my surname is Devkota", "and");
  console.log(a);
  