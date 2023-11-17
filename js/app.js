const scrollable = document.querySelector('.scrollable')

let current = 0
let target = 0
let ease = 0.075

function lerp(start, end, t){
  return start * (1 - t) + end * t
}

function init() {
  document.body.style.height = `${scrollable.getBoundingClientRect().height}px`
}

function smootScroll() {
  target = window.scrollY
  current = lerp(current, target, ease)
  scrollable.style.transform = `translate3d(0, ${-current}px, 0)`
  requestAnimationFrame(smootScroll)
}

init()

smootScroll()


