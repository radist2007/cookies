document.addEventListener('DOMContentLoaded', function() {
  console.log('Hello from main2.js');
  
  var inputCookieName = document.getElementById('inputCookieName').value;
  var inputCookieValue = document.getElementById('inputCookieValue').value;
  var btnSetCookie = document.getElementById('btnSetCookie');
  var btnGetCookie = document.getElementById('btnGetCookie');
  var info = document.getElementById('info');

  function configCookie(){
    console.log(inputCookieName);
    console.log(typeof( inputCookieName));
    console.log(inputCookieValue);
    console.log(typeof( inputCookieValue));
    inputCookieName = document.getElementById('inputCookieName').value;
    inputCookieValue = document.getElementById('inputCookieValue').value;
    var cookie = inputCookieName + '=' + inputCookieValue + ';max-age=31536000' + '; path=/;';
    console.log(inputCookieName);
    console.log(typeof( inputCookieName));
    console.log(inputCookieValue);
    console.log(typeof( inputCookieValue));
    return cookie;
  }

  console.warn('start');
  configCookie();
  console.log('end');

  function setCookie(){
    var cookie = "";
    cookie = configCookie();
    console.log('set cookie: ' + cookie + ' $');
  }

  function getCookie(){
    console.log('get cookie ' + document.cookie);
    alert(document.cookie);
    info.innerHTML = document.cokie;
  }

  btnSetCookie.addEventListener('click', setCookie, false);
  btnGetCookie.addEventListener('click', getCookie, false);

});