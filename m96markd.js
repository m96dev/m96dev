/* head tag
-----------please past --------------------------
//jquery version and markd.js
  <script type="text/javascript" src="https://code.jquery.com/jquery-2.2.4.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.12/marked.min.js"></script>

  <script>
  //markd load markdown file
    var urlOrPath = './README.md';
  </script>

  <!-- //this js file -->
  <script type="text/javascript" src="./markdM96.js"></script>
-----------please past --------------------------
  */

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


function loadAndReplace(targetarg, urlarg) {
  var renderer = new marked.Renderer();
  renderer.listitem = function (text) {
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
    // targetarg.append(marked(data));
    $(targetarg).append(marked(data));
  }).error(function (data) {
    targetarg.append("This content failed to load.");
  });
}

