async () => {
	// INSERT INTO tasks (name) VALUEs ('Setup Code Coverage');
	await Task.query().insert({ name: 'Setup Code Coverage' });
};
