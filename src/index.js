import DragAndDrop from './DragAndDrop'
import HangMan from './hangMan'
import Chat from './Chat'
import MemoryGame from './Memory'

const hangman = document.querySelector('#hngmanGame')
const chat = document.querySelector('#chatIcon')
const memory = document.querySelector('#memIcon')
const apply =document.querySelector('#apply')
const setting= document.getElementById('setting')
document.getElementById('settingContainer').style.visibility='hidden'
const close =document.getElementById('close')


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
apply.addEventListener('click', function(){
  let select= document.querySelector('#select')
  if(select.value==='2x2'){
  const myWindow = new DragAndDrop('.windowContainer')
  const myMemory = new MemoryGame(2, 2, 'memoryContainer', myWindow, memoryWindID)
  myWindow.div.appendChild(myMemory.div)
  }else if (select.value==='2x4'){
    const myWindow = new DragAndDrop('.windowContainer')
  const myMemory = new MemoryGame(2, 4, 'memoryContainer', myWindow, memoryWindID)
  myWindow.div.appendChild(myMemory.div)
  }
  else if(select.value==='4x4'){
    const myWindow = new DragAndDrop('.windowContainer')
  const myMemory = new MemoryGame(4, 4, 'memoryContainer', myWindow, memoryWindID)
  myWindow.div.appendChild(myMemory.div)
  }
})

setting.addEventListener('click', function(){
  document.getElementById('settingContainer').style.visibility='visible'
})
close.addEventListener('click', function(){
  document.getElementById('settingContainer').style.display='none'
})


