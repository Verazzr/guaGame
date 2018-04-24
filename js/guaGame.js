var guaGame = function (fps) {
	var canvas = document.querySelector('#game-canvas')
	var context = canvas.getContext('2d')

	var g = {
		canvas: canvas,
		context: context,
		actions: {},
		keydowns: {},
		drawImage: function (guaImage) {
			g.context.drawImage(guaImage.img, guaImage.x, guaImage.y, guaImage.w, guaImage.h)
		},
	}

	//events
	window.addEventListener('keydown', function (event) {
		g.keydowns[event.key] = true
	})

	window.addEventListener('keyup', function (event) {
		g.keydowns[event.key] = false
	})

	g.registerAction = function (key, callback) {
		g.actions[key] = callback
	}

	//timer
	setInterval(function () {
		// events update
		var actions = Object.keys(g.actions)
		for (var i = 0; i < actions.length; i++) {
			var key = actions[i]
			if (g.keydowns[key]) {
				// 如果按键被按下，调用注册的action
				g.actions[key]()
			}
		}

		//update
		g.update()

		// clear
		context.clearRect(0, 0, canvas.width, canvas.height)

		// draw
		g.draw()
	}, 1000/fps)

	return g
}
