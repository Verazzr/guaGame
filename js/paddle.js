var Paddle = function () {
	var image = imageFromPath('./images/paddle.png')
	var o = {
		img: image,
		x: 100,
		y: 250,
		w: 140,
		h: 30,
		speed: 15,
	}

	o.move = function (x) {
		if (x < 0) {
			x = 0
		}
		if (x > 400 - o.w) {
			x = 400 - o.w
		}
		o.x = x
	}

	o.moveLeft = function () {
		o.move(o.x - o.speed)
	}

	o.moveRight = function () {
		o.move(o.x + o.speed)
	}

	o.collide = function (ball) { // 判断正交
		return checkIntersect(o, ball)
	}
	return o
}
