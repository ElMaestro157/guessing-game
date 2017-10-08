class GuessingGame {
    constructor() {
    	this.min = 0;
    	this.max = 0;
    }

    setRange(min, max) {
    	this.min = min;
    	this.max = max;
    }

    guess() {
    	this.guessNumb = Math.round((this.max - this.min)/ 2) + this.min;
    	return this.guessNumb;
    }

    lower() {
    	this.max = Math.round((this.max - this.min)/ 2) + this.min;
    }

    greater() {
    	this.min = Math.round((this.max - this.min)/ 2) + this.min;
    }
}

module.exports = GuessingGame;
