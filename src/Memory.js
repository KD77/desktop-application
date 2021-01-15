class MemoryGame {
  constructor (x, y, container, myWindow, id) {
    this.container = document.getElementById(container)
    this.memoryDiv = document.querySelectorAll('#memoryContainer template')[0].content.firstElementChild
    this.div = document.importNode(this.memoryDiv, false)
    this.tiles = this.shuffleCards(x, y)
    // create new game
    this.createGame(x, y, this.memoryDiv, this.div)
    this.container.appendChild(this.div)

    const divRepresentWindow = document.createElement('div')
    divRepresentWindow.textContent = 'MemoryGame' + id
    divRepresentWindow.className = 'representWindowMemory'
    myWindow.div.firstElementChild.appendChild(divRepresentWindow)
  }

}
export default MemoryGame
