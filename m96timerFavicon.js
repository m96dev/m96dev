// favicon animation
var count = 0
var countup = function () {
  console.log(count++)// count up loop
}

var id = setInterval(function () {
  countup() // check for console log

  // favicon
  var favicon = new Favico({
    animation: 'popFade'
  })
  favicon.badge(badge)
  $('#m96dev').text('m' + badge + 'dev')
  $('#m96dev').fadeOut(1300, function () {
    $(this).fadeIn(1300)
  })
  badge += 1
  if (count > 8) {
    clearInterval(id) // idをclearIntervalで指定している. setInterval を使用して設定された繰り返し動作をキャンセルします。
  }
}, 1000)

// countdown for target date
function CountDownTimer (dt, id) {
  var end = new Date(dt)

  var _second = 1000
  var _minute = _second * 60
  var _hour = _minute * 60
  var _day = _hour * 24
  var timer

  function showRemaining () {
    var now = new Date()
    var distance = end - now
    if (distance < 0) {
      clearInterval(timer)
      document.getElementById(id).innerHTML = 'EXPIRED!'
      return
    }
    var days = Math.floor(distance / _day)
    var hours = Math.floor((distance % _day) / _hour)
    var minutes = Math.floor((distance % _hour) / _minute)
    var seconds = Math.floor((distance % _minute) / _second)

    document.getElementById(id).innerHTML = days + ' Days, ' + hours + ' : ' + minutes + ' : ' + seconds
  }
  timer = setInterval(showRemaining, 1000)
}
