document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
if (localStorage.getItem('cookieSeen') != 'shown') {
  $('.cookie-banner').delay(2000).fadeIn();
  localStorage.setItem('cookieSeen','shown')
};
$('.close').click(function() {
  $('.cookie-banner').fadeOut();
})