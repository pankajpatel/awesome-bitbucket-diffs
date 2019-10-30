var diffs = [];
function makeDiffsAwesome() {
  console.log('DOM fully loaded and parsed 2');
  var diffs = document.querySelectorAll('.diff-container');
  console.log(diffs);
  if(interval && diffs.length) {
    clearInterval(interval)
  }
}

/*
var observer = new MutationObserver(function(mutations){
  console.log('DOM fully loaded and parsed 2');
	mutations.forEach(function(){
		makeDiffsAwesome();
	});
});

var config = {attributes: true};

console.log('DOM fully loaded and parsed 2');
observer.observe(document.body, config);
 */

if(window.location.href.match('/diff')) {
  var interval = setInterval(function(){
    makeDiffsAwesome();
  }, 200);
}
