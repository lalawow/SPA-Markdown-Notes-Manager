require.config({
	packages: [{
		name: 'zrender',
		location: './zrender/src',
		main: 'zrender'
	}]
});


require(["zrender", 'zrender/tool/color', "zrender/animation/animation"], function(zrender, zrColor, Animation) {

	var zr = zrender.init(document.getElementById('main'));
	var RectangleShape = require('zrender/shape/Rectangle');
	var color = "purple"
	var max_level = 5
	var max_length = 405
	var zeroPoint = {
		x: 0,
		y: 0
	}
	var animation_timelapse = 2000
	
	

	var addSquare = function(point, side_length) {
		var squareStyle = {
			x: point.x,
			y: point.y,
			width: side_length,
			height: side_length,
			color: color,
		}
		var square = new RectangleShape({
			style: squareStyle
		})
		zr.addShape(square)
		return square
	}

	var addSquares = function(point, side_length, level) {
		var points = []
		points[0] = {
			x: point.x + side_length,
			y: point.y + side_length
		}
		points[1] = {
			x: point.x,
			y: point.y
		}
		points[2] = {
			x: point.x + side_length,
			y: point.y
		}
		points[3] = {
			x: point.x,
			y: point.y + side_length
		}
		points[4] = {
			x: point.x + side_length,
			y: point.y + side_length
		}

		for (var i = 0; i < 5; i++) {
			startPoints[level].push(points[i])
			squares[level].push(addSquare(points[i],side_length))
		}
	}
	

	var startPoints = []
	var squares = []
	startPoints[0] = []
	squares[0] = []
	startPoints[0][0] = zeroPoint
	var side_lengths = []
	side_lengths[0] = max_length
	squares[0][0] = addSquare(startPoints, side_length)
	var level = 0

	for (var i = 1; i < max_level; i++) {
		var len = startPoints[i - 1].length
		startPoints[i] = []
		squares[i] = []
		side_lengths.push(side_lengths[i-1]/3)
		for (var j = 0; j < len; j++) {
			addSquares(startPoints[i - 1][j], side_length, i)
		}
		console.log(i)
	}

	zr.render()

	var change_level = 0;
	var start = false
	var processing = false
	while (change_level < max_level - 1) {
		if (start === false) {
			start = true
			var len = startPoints[change_level].length
			var side_length = side_lengths[change_level]
			for (var j = 0; j < len; j++) {
				var square_change = zr.animate(squares[change_level][j].id, "style", false).
				when(animation_timelapse, {
					x: startPoints[change_level][j].x + side_length / 3,
					y: startPoints[change_level][j].y + side_length / 3,
					width: side_length/3,
					height: side_length/3
				}).start()
			}
			processing = true			
		}
		if (processing = true) {
			processing = false
			setTimeout(function(){
				start = false
				for (var j=0; j<startPoints[change_level].length; j++) {
					zr.removeShape(squares[change_level][j])
				}
				change_level++
				zr.render()
			}, animation_timelapse)
		} 
	}


})
