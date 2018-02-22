(function($) {

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#page-wrapper'),
			$banner = $('#banner'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Menu.
			$('#menu')
				.append('<a href="#menu"></a>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'is-menu-visible'
				});

				
		   var cities = ['Sofia', 'Lovech', 'Svoge', 'Burgas'];

			$('#search-field').on('input', function() {
				var currentSelection = $(this).val();
				var matches = cities.filter(function(city) {
					return city.indexOf(currentSelection) >= 0;
				})
				console.log(matches);
			})

	});

})(jQuery);
