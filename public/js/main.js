function animate(el, animation) {
  el = $(el);
  el.addClass(animation + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
    el.removeClass(animation);
    el.removeClass('animated');
  });
}


var customFeatures = $('#customFeatures');

var currentFeature = null;
var gbf;
var gbSeq = $('#gbSeq');

customFeatures.hide();
$('#gbFile').on('change', function () {
  var input = $(this);
  var file = input[0].files[0];
  var reader = new FileReader();


  reader.onload = function (e) {
    var text = reader.result;
    gbf = genbank.parseGBF(text);

    if (gbf.features) {
      console.log(gbf);
      customFeatures.empty();
      customFeatures.show();
      gbf.features.map(function (feature) {
        customFeatures
          .append($("<option></option>")
            .attr("value", feature.sequence)
            .text(feature.key));
      });
      gbSeq.val(customFeatures.val());
    }
  };
  reader.readAsText(file, 'utf8');
});

customFeatures.on('change', function () {
  gbSeq.val(customFeatures.val() || 'none');
});

