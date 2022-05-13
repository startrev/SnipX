/* 
  URL: www.twitch.tv
  Type: JavaScript

  The following snippet highlights all
  messages written by users listed in 
  'target', every half of a second.
*/

let target = ['StreamElements']

let msgs = document.querySelector(
  '.chat-scrollable-area__message-container'
)

setInterval(function () {
  let users = document.getElementsByClassName
  ('chat-author__display-name')
      
  for(let i=0; i < users.length; i++) {
    for(let x=0; x < target.length; x++) {
      if(users[i].innerHTML == target[x]) {
        let el = users[i].parentNode
        .parentNode.parentNode.parentNode
        .parentNode.parentNode.parentNode
        .parentNode

        el.style.background = 'yellow'
        el.style.color = 'black'
      }
}}}, 500)