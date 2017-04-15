var dreams = document.getElementById('dreams');
  var v = new ProgressButton( dreams , {
					callback : function( instance ) {
						var progress = 0,
							interval = setInterval( function() {
								progress = Math.min( progress + Math.random() * 0.1, 1 );
								instance._setProgress( progress );

								if( progress === 1 ) {
									instance._stop(1);
									clearInterval( interval );
								}
							}, 200 );
					}
	} );

//initiate the loader
setTimeout( function() {
  dreams.click();
},800);

function loadHome() {
    $.ajax({
      url: '/alt_home',
      success: function(res) {
        console.log('success');
        $('main.view').html(res);
        showHome();
      },
      error : function(res) {
        console.log('error');
      }
    })
}

function showHome() {
  $('.preloader').slideUp();
}

setTimeout( function() {
  loadHome();
},3000)
