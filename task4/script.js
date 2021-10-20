document.querySelector('a').addEventListener('click', 
  (event) => {
    let value =  prompt('Измените текст ссылки');
    console.log(value)
   document.getElementById('test').innerText=value
})

