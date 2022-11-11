new (class GameData {
	constructor() {
		console.log('Game Started!');

		this.xp = 0;
		this.level = 1;
		this.next_level_xp = 100;

		setInterval(() => {
			this.autoIncrementXp();
		}, 1000);
	}

	addXp(amount) {
		this.xp += amount;

		PubSub.publish('xp_changed', {
			xp: this.xp,
			next_level_xp: this.next_level_xp,
		});
	}

	autoIncrementXp() {
		this.addXp(this.level * 5);
	}
})();
