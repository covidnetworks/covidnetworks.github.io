$('.close-cookie-banner').click(function() {
    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 2 * 365 * 24 * 60 * 60; // two years
    now.setTime(expireTime);
    document.cookie = 'cookieAccepted=true; expires=' + now.toUTCString() + '; path=/; ';
    $('.cookie-banner').slideUp("slow");
});

$(document).ready(function() {
    if (!(document.cookie.includes('cookieAccepted=true'))) {
        for (let item of document.getElementsByClassName('cookie-banner')) {
            item.style.display = 'unset';
        }
    }
});