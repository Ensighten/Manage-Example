var frame = document.createElement('iframe'),
  getCookie = Bootstrapper.Cookies ? Bootstrapper.Cookies.get : function(a, c) {
    for (var b = document.cookie.split(';'), d = 0; d < b.length; d++) {
      var e = b[d].replace(/^s+/, '').split('=');
      if (e[0] == a) return c ? e[1] : decodeURIComponent(e[1])
    }
    return '';
  },
  gclid = getCookie('_gcl_aw') ? getCookie('_gcl_aw').split('.')[getCookie('_gcl_aw').split('.').length - 1] : '';
frame.style.display = 'none';
frame.style.width = '1px';
frame.style.height = '1px';
frame.src = 'https://1234.fls.doubleclick.net/activityi;src=1234;type=type11;cat=cat22;ord=ord33;' + (gclid ? ('gcldc=' + gclid + ';gclaw=' + gclid + ';') : '') + '~oref=' + window.encodeURIComponent(window.location.href) + '?';
frame.title = 'No Content';
document.body.appendChild(frame);
