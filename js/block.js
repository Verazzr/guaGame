var Block = function (position) {
	var p = position
	var image = imageFromPath('./images/block.png')
	var o = {
		img: image,
		x: p[0],
		y: p[1],
		w: 50,
		h: 20,
		alive: true,
		lifes: p[2] || 1
	}

	o.kill = function () {
		o.lifes--
		if (o.lifes < 1) {
			o.alive = false
		}
	}

	o.collide = function (ball) { // 判断正交
		return o.alive && checkIntersect(o, ball)
	}
	return o
}
