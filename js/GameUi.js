new (class GameUi {
	constructor() {
		this.button = document.getElementById('add-xp');
		this.progressBar = document.getElementById('level-progress');
		this.currentXp = document.getElementById('current-xp');
		this.nextLevelXp = document.getElementById('next-level-xp');
		this.currentLevel = document.getElementById('current-level');
		this.huzzah = document.getElementById('huzzah');

		PubSub.subscribe('xp_changed', (tag, data) => {
			this.updateProgressBar(data.xp, data.next_level_xp);
			this.updateCurrentXp(data.xp);
		});

		PubSub.subscribe('level_up', (tag, data) => {
			this.congratulations(data.level, data.next_level_xp);
		});

		this.button.addEventListener('click', () => {
			PubSub.publish('user_click_xp');
		});
	}
	congratulations(level, next_level_xp) {
		this.currentLevel.textContent = level;
		this.nextLevelXp.textContent = next_level_xp;

		this.huzzah.style.opacity = 1;
		setTimeout(() => {
			this.huzzah.style.opacity = 0;
		}, 3000);
	}

	updateCurrentXp(xp) {
		this.currentXp.textContent = xp;
		console.log(xp);
	}

	updateProgressBar(xp, next_level_xp) {
		this.progressBar.style.width = (xp / next_level_xp) * 100 + '%';
	}
})();
