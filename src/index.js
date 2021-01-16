import DragAndDrop from './DragAndDrop'
import HangMan from './hangMan'
import Chat from './Chat'
import MemoryGame from './Memory'

const hangman = document.querySelector('#hngmanGame')
const chat = document.querySelector('#chatIcon')
const memory = document.querySelector('#memIcon')

let hangmanGameID = 1
hangman.addEventListener('click', function () {
  const myWindow = new DragAndDrop('.windowContainer')
  const myGame = new HangMan('.hangManContainer', myWindow, hangmanGameID)
  hangmanGameID++
  myWindow.div.appendChild(myGame.div)
})
let chatWindID = 1
chat.addEventListener('click', function () {
  const myWindow = new DragAndDrop('.windowContainer')
  const myChat = new Chat('.chatContainer', myWindow, chatWindID)
  chatWindID++
  myWindow.div.appendChild(myChat.div)
})
let memoryWindID = 1
memory.addEventListener('click', function () {
  const myWindow = new DragAndDrop('.windowContainer')
  const myMemory = new MemoryGame(4, 4, 'memoryContainer', myWindow, memoryWindID)
  myWindow.div.appendChild(myMemory.div)
  memoryWindID++
})
