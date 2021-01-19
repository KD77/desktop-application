export default class HangMan {
  /**
   *
   * @param {*} container
   * @param {class} myWindow  the window
   * @param {Intiger} id  each window has a unique id
   */
  constructor (container, myWindow, id) {
    // Array of the secret words
    const fruits = [
      'Apple',
      'Orange',
      'Plum',
      'Bananas',
      'Pears',
      'Avocado',
      'Blackberries',
      'Apricots',
      'Cantaloupe',
      'Cherries',
      'Grapes',
      'Grapes',
      'Mandarin',
      'Mango',
      'Papaya',
      'Peaches',
      'Pineapple',
      'Raspberries',
      'Strawberries',
      'Watermelon',
      'Blueberries',

      
    ]
    // declare & initialize variables
    this.container = document.querySelector(container)
    this.hangMan = document.querySelectorAll(
      '.hangManContainer template'
    )[0].content.firstElementChild
    this.div = document.importNode(this.hangMan, true)
    this.container.appendChild(this.div)

    this.ID = id;
    this.underscoreReplacment = [];
    this.counter = 0
    this.tryCounter = 0
    this.showMessageDiv = this.div.childNodes[1]
    this.ansText = this.div.childNodes[5]

    const divRepresentWindow = document.createElement('div')
    divRepresentWindow.textContent = 'HangMan' + id
    divRepresentWindow.className = 'representWindow'
    myWindow.div.firstElementChild.appendChild(divRepresentWindow)

    //choose one word randomly and convert it to lowerCase
    var selectWord = fruits[Math.floor(Math.random() * fruits.length)];
    this.choosenWord = selectWord.toLowerCase();
    const ptxt = document.createTextNode(this.underScore())
    const pRepresentWindow = document.createElement('p')
    
    pRepresentWindow.appendChild(ptxt)
    myWindow.div.appendChild(pRepresentWindow)

    

    //if the user typed a char and pressed enter go to checkChar() to check that char
    this.ansText.addEventListener('keypress', (event) => {
      document.getElementById('msg').style.display = 'none'
      if (event.keyCode === 13) {
        this.checkChar(myWindow, event.target.value)
        event.preventDefault()
      }
    })
  }
  underScore() {
    for (var i = 0; i < this.choosenWord.length; i++) {
      this.underscoreReplacment.push(' _ ');
    }
    return this.underscoreReplacment;
  }

  checkChar(myWindow, chr) {
    this.inputValue = chr
    this.tryCounter++;
    //Loop to check if the this char equals any char in the choosen word
    for (var i = 0; i < this.choosenWord.length; i++) {
      if (this.inputValue.charAt(0) === this.choosenWord.charAt(i)) {
        this.underscoreReplacment[i] = this.inputValue.charAt(0)
        // if this char equals any char raise the counter by 1
        this.counter++;
        if (this.counter !== 1 && this.counter < this.choosenWord.length) {
          var el = document.getElementById(this.ID);
          el.remove();
        }
        // if the counter equals the choosen word leangth display win meesage and how many tries 
        else if (this.counter === this.choosenWord.length) {
          var el = document.getElementById(this.ID);
          el.remove();

          const pRp = document.createElement('p')
          pRp.style.color = "#000"
          pRp.style.fontSize = "large";
          pRp.className = "winMessage"
          pRp.style.fontWeight = 'bold';
          const ptxts = document.createTextNode("WON!")
          pRp.appendChild(ptxts)
          myWindow.div.appendChild(pRp)
        }
      }
    }

    //Show the char and it's position
    if (document.getElementById(this.ID) == null) {
      const pRp = document.createElement('p')
      pRp.setAttribute("id", this.ID);
      pRp.style.color = "#000"
      const ptxts = document.createTextNode(this.underscoreReplacment)
      pRp.appendChild(ptxts)
      myWindow.div.appendChild(pRp)
    }
  }
}

