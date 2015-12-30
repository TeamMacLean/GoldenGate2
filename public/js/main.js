function animate(el, animation) {
  el = $(el);
  el.addClass(animation + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
    el.removeClass(animation);
    el.removeClass('animated');
  });
}


var customFeatures = $('#customFeatures');
customFeatures.hide();
$('#gbFile').on('change', function () {
  var input = $(this);
  var file = input[0].files[0];
  var reader = new FileReader();

  reader.onload = function (e) {
    var text = reader.result;
    var gbf = genbank.parseGBF(text);
    console.log(gbf);
    customFeatures.empty();
    customFeatures.show();
    gbf.features.map(function (feature) {
      customFeatures
        .append($("<option></option>")
          .attr("value", feature.key)
          .text(feature.key));
    });

  };

  reader.readAsText(file, 'utf8');
});