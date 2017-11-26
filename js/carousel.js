var $img = $('.img-ct li')
var $pre = $('.carousel .pre')
var $next = $('.carousel .next')
var $bullet = $('.bullet')


var imgLen = $('.img-ct li').length
var curIndex = 0
var isAnimate = false

play(0)

setInterval(function(){
  playNext()
}, 2000)

$pre.on('click', function(){
   playPre()
})

$next.on('click', function(){
   playNext()
})

$bullet.on('click', 'li', function(){
  play($(this).index())
})

function playPre() {
  play(( imgLen + curIndex - 1) % imgLen)
}

function playNext() {
  play((curIndex+1)%imgLen)
}

function play(index) {
  if(isAnimate){return}
  isAnimate = true
  $img.eq(curIndex).fadeOut(500)
  $img.eq(index).fadeIn(500, function() {
    isAnimate = false
  })
  curIndex = index
  setBullet()

}

function setBullet() {
  $bullet.children().removeClass('active').eq(curIndex).addClass('active')
}