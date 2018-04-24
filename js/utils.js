var log = console.log.bind(console)

var imageFromPath = function (path) {
	var img = new Image()
	img.src = path
	return img
}

var checkIntersect = function (o, ball) {  // 判断正交
	var noIntersect =
	(o.x + o.w < ball.x) ||
	(o.x > ball.x + ball.w) ||
	(o.y + o.h < ball.y) ||
	(o.y > ball.y +ball.h)

	if (!noIntersect) {
		return true
	} else {
		return false
	}
}
