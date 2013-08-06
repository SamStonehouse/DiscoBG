$('document').ready(function() {
	(function() {
		var r = (Math.floor(Math.random() * 256));
		var g = (Math.floor(Math.random() * 256));
		var b = (Math.floor(Math.random() * 256));

		function setBG(r,g,b) {
			$('body').css('background-color', 'rgb(' + r + ', ' + g + ', ' + b + ')');
		}

		function changeColour(colour) {
			return (colour + Math.round(Math.random() * 3) - 1)%256;
		}

		setBG(r,g,b);
		
		setInterval( function() {
			r = changeColour(r);
			g = changeColour(g);
			b = changeColour(b);

			setBG(r,g,b);
		}, 10);
	})(); 
});
