class Chat {
  /**
   *
   * @param {*} container
   * @param {class} myWindow  the window
   * @param {Intiger} id  each window has a unique id
   */
  constructor (container, myWindow, id) {
    // declare & initialize variables
    this.container = document.querySelector(container)
    this.chatDiv = document.querySelectorAll(
      '.chatContainer template'
    )[0].content.firstElementChild
    this.div = document.importNode(this.chatDiv, true)
    this.container.appendChild(this.div)

    this.socket = new WebSocket('ws://vhost3.lnu.se:20080/socket/')

    this.myName = localStorage.getItem('username')

    this.showName = this.div.childNodes[3]
    this.showMessageDiv = this.div.childNodes[1]
    this.textAreaDiv = this.div.childNodes[5]

    const divRepresentWindow = document.createElement('div')
    divRepresentWindow.textContent = 'Chat' + ' ' + id
    divRepresentWindow.className = 'representWindow'
    myWindow.div.firstElementChild.appendChild(divRepresentWindow)

    // if its true show user name, allow to change else add new username
    if (this.isUserNameExist()) {
      this.showName.innerText = 'Me ' + '( ' + this.myName + ' )'
      this.changeName(myWindow)
    } else {
      this.showName.style.display = 'none'
      this.addUserName(myWindow)
    }

    this.socket.onmessage = (event) => {
      this.onEachMessage(event)
    }

    // send message to the server
    this.textAreaDiv.addEventListener('keypress', (event) => {
      this.myName = localStorage.getItem('username')
      if (event.keyCode === 13) {
        this.messageJsToServer = {
          type: 'message',
          data: event.target.value,
          username: this.myName,
          key: 'eDBE76deU7L0H9mEBgxUKVR0VCnq0XBd'
        }
        this.sendJsonMessage = JSON.stringify(this.messageJsToServer)
        this.socket.send(this.sendJsonMessage)
      }
    })
  }

  // recive message
  onEachMessage (event) {
    this.messageDiv = document.createElement('div')
    this.message = event.data
    this.message = JSON.parse(this.message)
    this.strangerUserName = this.message.username
    this.data = this.message.data
    this.messageDiv.innerHTML =
      this.strangerUserName + ':' + '<br>' + this.data
    this.messageDiv.className = 'container'
    this.showMessageDiv.appendChild(this.messageDiv)
  }

  // add user name textBox and button
  addUserName (myWindow) {
    const addUserName = document.createElement('button')
    addUserName.innerText = '+'
    addUserName.className = 'changeNameButton'
    addUserName.style.padding = '5px 10px'
    myWindow.div.firstElementChild.appendChild(addUserName)
    addUserName.addEventListener('click', (event) => {
      addUserName.remove()
      const textBox = document.createElement('input')
      textBox.placeholder = 'name'
      textBox.className = 'UserNameTextBox'
      myWindow.div.firstElementChild.appendChild(textBox)
      const buttonOk = document.createElement('button')
      buttonOk.innerText = 'OK'
      buttonOk.className = 'buttonOk'
      myWindow.div.firstElementChild.appendChild(buttonOk)
      buttonOk.addEventListener('click', () => {
        this.nameValue = document.querySelector('.UserNameTextBox').value
        localStorage.setItem('username', this.nameValue)
        this.showName.style.display = 'block'
        this.showName.innerText = 'Me ' + '( ' + this.nameValue + ' )'
        textBox.remove()
        buttonOk.remove()
        this.changeName(myWindow)
      })
    })
  }

  // change name
  changeName (myWindow) {
    const changeNameButton = document.createElement('button')
    changeNameButton.innerText = '+'
    changeNameButton.className = 'changeNameButton'
    myWindow.div.firstElementChild.appendChild(changeNameButton)
    changeNameButton.addEventListener('click', (event) => {
      changeNameButton.remove()
      const textBox = document.createElement('input')
      textBox.placeholder = 'name'
      textBox.className = 'UserNameTextBox'
      myWindow.div.firstElementChild.appendChild(textBox)
      const buttonOk = document.createElement('button')
      buttonOk.innerText = 'OK'
      buttonOk.className = 'buttonOk'
      myWindow.div.firstElementChild.appendChild(buttonOk)
      buttonOk.addEventListener('click', () => {
        this.nameValue = document.querySelector('.UserNameTextBox').value
        localStorage.setItem('username', this.nameValue)
        this.showName.innerText = 'Me ' + '( ' + this.nameValue + ' )'
        textBox.remove()
        buttonOk.remove()
        this.changeName(myWindow)
      })
    })
  }

  // return true if there is a user name in local storage
  isUserNameExist () {
    this.myName = localStorage.getItem('username')
    console.log(this.myName)
    if (this.myName === null || this.myName === '') {
      return false
    } else {
      return true
    }
  }
}
export default Chat
