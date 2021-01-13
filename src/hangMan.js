export default class hangMan {
  constructor (container, myWindow, id) {
    // declare & initialize variables
    this.container = document.querySelector(container)
    this.hngMan = document.querySelectorAll('.hangManContainer template')[0].content.firstElementChild
    this.div = document.importNode(this.hngMan, true)
    this.container.appendChild(this.div)
  }
}
