function Question1() {
	let _firstNumbers = Math.floor(Math.random(0, 1) * 100);
	let _secondNumbers = Math.floor(Math.random(0, 1) * 100);

	let _result = _firstNumbers + _secondNumbers;
	_userRepons = parseInt(prompt("Calculez :\\n" + _firstNumbers + " Plus " + _secondNumbers));

	if (_result == _userRepons) {
		return "Bravo, ceci est la bonne réponse!";
	}
	else {
		return "Tu es très mauvais, la bonne réponse est : " + _result;
	}
}

alert (Question1());