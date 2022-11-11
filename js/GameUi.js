new (class GameUi {
	constructor() {
		this.button = document.getElementById('add-xp');
		this.progressBar = document.getElementById('level-progress');
		this.currentXp = document.getElementById('current-xp');
		this.nextLevelXp = document.getElementById('next-level-xp');
		this.currentLevel = document.getElementById('current-level');
		this.currentXp = document.getElementById('current-xp');
		this.huzzah = document.getElementById('huzzah');

		PubSub.subscribe('xp_changed', (tag, data) => {
			this.updateProgressBar(data.xp, data.next_level_xp);
			this.updateCurrentXp(data.xp);
		});
	}

	updateCurrentXp(xp) {
		this.currentXp.textContent = xp;
		console.log(xp);
	}

	updateProgressBar(xp, next_level_xp) {
		this.progressBar.style.width = (xp / next_level_xp) * 100 + '%';
	}
})();
