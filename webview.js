module.exports = Franz => {
  const getMessages = function getMessages() {
    let unread = document.querySelector('.unread-div-const > i')
    if (unread) {
      let count = unread.classList[2].replace('fa-', '')
      if (count !== '5plus') {
        Franz.setBadge(parseInt(count))
      }
    }
  }
  Franz.loop(getMessages)
}
