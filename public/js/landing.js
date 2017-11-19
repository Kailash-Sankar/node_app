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
//setTimeout( function() {
  dreams.click();
//},800);

function showHome() {
  $('.preloader').slideUp(2000);
}

function loadHome() {
    $.ajax({
      url: '/home',
      success: function(res) {
        //console.log('success');
        $('main.view').html(res).fadeIn();
          $('main.view').addClass('bg-main');
          setTimeout( function() {
            showHome();
          },500)
          //loadParticles();
      },
      error : function(res) {
        //console.log('error');
      }
    })
}



setTimeout( function() {
  loadHome();
},500)
