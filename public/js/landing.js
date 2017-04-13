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

setTimeout( function() {
  loadHome();
},3000)

function loadHome() {
    $.ajax({
      url: '/home',
      success: function(res) {
        $('main.view').html(res);
        $('.preloader').slideUp();
        console.log('success');
      },
      error : function(res) {
        console.log('error');
      }
    })
}
