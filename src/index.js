import DragAndDrop from './DragAndDrop'
import HangMan from './hangMan'

const hangman = document.getElementById('hngmanGame')
var hangmanGameID = 1
hangman.addEventListener('click', function () {
  const myWindow = new DragAndDrop('.windowContainer')
  const myChat = new HangMan('.hangManContainer', myWindow, hangmanGameID)
  hangmanGameID++
  myWindow.div.appendChild(myChat.div)
})
