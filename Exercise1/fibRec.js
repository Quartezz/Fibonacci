const fibsRecurse = (n) => {
	return n <= 0
		? "Please enter a valid number of elements to be given an answer."
		: n === 1
		? [0]
		: n === 2
		? [0, 1]
		: [...fibsRecurse(n - 1), fibsRecurse(n - 1)[n - 2] + fibsRecurse(n - 1)[n - 3]];
};

console.log(fibsRecurse(8));