class MemoryGame {
  /**
   *the constraction takes the position of x-axis, y-axis, the window html tag, drag and drop class and a uniqe id
   *
   * @param {int} x row of the cards
   * @param {int} y  column of the card
   * @param {*} container
   * @param {*} myWindow the window
   * @param {int} id  each window has a unique id
   */

  constructor (x, y, container, myWindow, id) {
    this.container = document.getElementById(container)
    this.memoryDiv = document.querySelectorAll(
      '#memoryContainer template'
    )[0].content.firstElementChild
    this.div = document.importNode(this.memoryDiv, false)
    this.tiles = this.shuffleCards(x, y)
    // create new game
    this.createGame(x, y, this.memoryDiv, this.div)
    this.container.appendChild(this.div)
    // tittle and window ID
    const divRepresentWindow = document.createElement('div')
    divRepresentWindow.textContent = 'MemoryGame' + ' ' + id
    divRepresentWindow.className = 'representWindowMemory'
    myWindow.div.firstElementChild.appendChild(divRepresentWindow)
  }

  createGame (x, y, template, div) {
    // declare & initialize variables
    let card1
    let card2
    let lastCard
    let match = 0
    let counter = 0
    this.tiles.forEach(function (card, index) {
      const a = document.importNode(template.firstElementChild, true)
      div.appendChild(a)
      // If the user pressed on a card then show this card
      a.addEventListener('click', function (event) {
        const img =
          event.target.nodeName === 'IMG'
            ? event.target
            : event.target.firstElementChild
        displayCard(card, index, img)
      })
      /**
       * this method shows the cards.
       *
       * @param {} card
       * @param {Intiger} index
       * @param {*} img
       */
      function displayCard (card, index, img) {
        if (card2) {
          return
        }
        img.src = 'img/mem/' + card + '.png'
        if (!card1) {
          card1 = img
          lastCard = card
        } else {
          if (img === card1) {
            return
          }
          counter = counter + 1
          card2 = img
          if (card === lastCard) {
            match += 1
            if (match === (x * y) / 2) {
              div.textContent = 'You Win!'
            }
            window.setTimeout(function () {
              card1 = null
              card2 = null
            }, 400)
          } else {
            window.setTimeout(function () {
              card1.src = 'img/mem/js.png'
              card2.src = 'img/mem/js.png'
              card1 = null
              card2 = null
            }, 500)
          }
        }
      }

      // display 2x2, otherwise it will print 1x4
      if ((index + 1) % y === 0) {
        div.appendChild(document.createElement('br'))
      }
    })
  }

  /**
   * shuffleCards based on columns and rows.
   * x and y are the positions
   *
   * @param {double} x
   * @param {double} y
   */
  shuffleCards (x, y) {
    const array = []
    for (var i = 1; i <= (x * y) / 2; i++) {
      array.push(i)
      array.push(i)
    }
    for (let j = array.length - 1; j > 0; j--) {
      const rand = Math.floor(Math.random() * (j + 1))
      const num = array[j]
      array[j] = array[rand]
      array[rand] = num
    }
    return array
  }
}
export default MemoryGame
