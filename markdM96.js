
  $(document).ready(function () {
    var badge = 100;
    var favicon = new Favico({
      animation: 'popFade'
    });
    $('#plusOne').bind('click', function () {
      badge = badge + 1;
      favicon.badge(badge);
    });
    $('#minusOne').bind('click', function () {
      badge = (badge - 1 < 0) ? 0 : (badge - 1);
      favicon.badge(badge);
    });
    $('#reset').bind('click', function () {
      favicon.reset();
    });

    var favicon = new Favico({
      bgColor: '#080808',
      textColor: '#fff',
    });
    //intial value
    favicon.badge(badge);
    badge = badge + 3;
  });

  var urlOrPath = './README.md';

  $(document).ready(function () {
    // var target = $("#markdown_content");
    // $.ajax({
    //   url: urlOrPath,
    // }).success(function (data) {
    //   var oneline = data.split('\n');
    //   $('title').html(oneline[0]); // replace title 1st line from file
    //   target.append(marked(data));
    // }).error(function (data) {
    //   target.append("This content failed to load.");
    // });

    var urlOrPath1 = './.gitignore';
    var urlOrPath1 = './index.css';
    var target1 = $("#gitignore");
    loadAndReplace(target1, urlOrPath);

  });


  function loadAndReplace(targetarg, urlarg) {
    var renderer = new marked.Renderer();
    // // renderer.list = function (body, ordered) {
    // //   var type = ordered ? 'ol' : 'ul';
    // //   return '<' + type + ' class="list-group">' + body + '</' + type + '>';
    // // };
    // // renderer.listitem = function (text) {
    // //   return '<li class="list-group-item">' + text + '</li>';
    // // };

    renderer.listitem = function(text) {
      if (/^\s*\[[x ]\]\s*/.test(text)) {
      text = text
        .replace(/^\s*\[ \]\s*/, '<li class="list-group-item-danger"><label><input type="checkbox" >')
        .replace(/^\s*\[x\]\s*/, '<li class="list-group-item-info"><label><input type="checkbox" checked="checked" disabled>');
          return text + '</label></li>';
        } else {
          return '<ul class="list-group">' + text + '</ul>';
        }
    };
    marked.setOptions({
      renderer: renderer,
      gfm: true,
      tables: true,
      breaks: true,
      pedantic: false,
      sanitize: false,
      smartLists: false,
      smartypants: false
    });

    // var target = $("#markdown_content");
    $.ajax({
      // url: target[0].attributes["src"].value,
      url: urlarg,
    }).success(function (data) {
      var oneline = data.split('\n');
      $('title').html(oneline[0]); // replace title 1st line from file
      // 変換後のHtmlをhtmlに格納しておきます
      data = marked(data);
      // ここで[x]を選択済みのチェックボックスに[ ]を未選択のチェックボックスに変換
      // data = data.replace(/\[x\]/gi, '<input type="checkbox" checked="checked">');
      // data = data.replace(/\[ \]/gi, '<input type="checkbox" >');
      targetarg.append(marked(data));
    }).error(function (data) {
      targetarg.append("This content failed to load.");
    });
  }

  var count = 0;
  var badge = 88;
  var h1text = ''
  var countup = function () {
    console.log(count++);
  }
  var id = setInterval(function () {
    countup();

    var favicon = new Favico({
      animation: 'popFade'
    });
    favicon.badge(badge);
    $('#m96dev').text('m' + badge + 'dev');
    $('#m96dev').fadeOut(1300, function () {
      $(this).fadeIn(1300)
    });
    badge += 1;


    if (count > 8) {　
      clearInterval(id);　 //idをclearIntervalで指定している
    }
  }, 1000);


  CountDownTimer('02/01/2018', 'countdown');
  CountDownTimer('03/01/2018', 'newcountdown');

  function CountDownTimer(dt, id) {
    var end = new Date(dt);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
      var now = new Date();
      var distance = end - now;
      if (distance < 0) {
        clearInterval(timer);
        document.getElementById(id).innerHTML = 'EXPIRED!';
        return;
      }
      var days = Math.floor(distance / _day);
      var hours = Math.floor((distance % _day) / _hour);
      var minutes = Math.floor((distance % _hour) / _minute);
      var seconds = Math.floor((distance % _minute) / _second);

      document.getElementById(id).innerHTML = days + ' Days, ' + hours + ' : ' + minutes + ' : ' + seconds;
      // document.getElementById(id).innerHTML += hours + ': ';
      // document.getElementById(id).innerHTML += minutes + ': ';
      // document.getElementById(id).innerHTML += seconds + ':';
    }

    timer = setInterval(showRemaining, 1000);
  }
