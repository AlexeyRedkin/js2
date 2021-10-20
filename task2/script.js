consoleLog.onclick = function() {
    alert('Медол для вывода сообщения в веб консоль!');
    
    consoleLogText.innerText  = "Пример использования команды console.log";
  };


  element = document.getElementById('alert');
  element.onclick = function() {
    alert('Пример использования команды alert!');
  };


  element = document.getElementById('prompt');
  element.onclick = function() {
    alert('Пример использования команды prompt');
  };