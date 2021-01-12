class DragAndDrop {
  constructor (container) {
    this.container = document.querySelector(container)
    this.windowDiv = document.querySelectorAll('.windowContainer template')[0].content.firstElementChild
    this.div = document.importNode(this.windowDiv, true)
    this.container.appendChild(this.div)
    this.closeWindowElement = this.div.childNodes[1].childNodes[1]
    this.div.addEventListener('mousedown', this.moveDown, true)
    this.div.addEventListener('mouseup', this.moveUp, true)
    this.div.addEventListener('mousemove', this.move, true)
    this.closeWindowElement.addEventListener('click', (event) => {
      this.div.remove()
    })
  }

  moveDown (event) {
    document.querySelectorAll('.window').forEach((window) => {
      window.style.zIndex = -1
    })
    this.style.zIndex = 999
    this.isDown = true
    this.coordinates = [this.offsetLeft - event.clientX - 150,
      this.offsetTop - event.clientY - 40]
  }

  moveUp () {
    this.isDown = false
  }

  move (event) {
    if (this.isDown) {
      this.mousePosition = {
        x: event.clientX,
        y: event.clientY
      }
      this.style.left = (this.mousePosition.x + this.coordinates[0]) + 'px'
      this.style.top = (this.mousePosition.y + this.coordinates[1]) + 'px'
    }
  }
}
export default DragAndDrop
