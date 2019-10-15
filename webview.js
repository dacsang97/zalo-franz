module.exports = Franz => {
  const getMessages = function getMessages() {
    let count = 0
    let unread = document.querySelector('.unread-div-const > i')
    if (unread) {
      let numStr = unread.classList[2].replace('fa-', '')
      if (numStr !== '5plus') {
        count = parseInt(numStr)
      }
    }
    Franz.setBadge(count)
  }
  Franz.loop(getMessages)
}
