function animate(el, animation) {
  el = $(el);
  el.addClass(animation + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
    el.removeClass(animation);
    el.removeClass('animated');
  });
}
