// document.querySelector('a').addEventListener('input', 
//   (event) => {
//     let value =  prompt('Измените текст ссылки');
//     console.log(value)
//    document.getElementById('test').innerText=value
// })

function clearInput() {
   
    let text = document.getElementById('text')
    console.log(text.value);
    text.value = "";
    document.getElementById('duplicateField').innerText=""
}

// document.getElementById('text').addEventListener('onchange') = function(event) {
//     console.log(13);
//   };

var input = document.getElementById('text');

  input.oninput = function() {
    // document.getElementById('result').innerHTML = input.value;
    // console.log(this.value);
       document.getElementById('duplicateField').innerText=this.value
  };