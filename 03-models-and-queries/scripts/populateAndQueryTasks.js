async () => {
	// INSERT INTO tasks (name) VALUEs ('Setup Code Coverage');
	await Task.query().insert({ name: 'Setup Code Coverage' });

	// SELECT * FROM tasks;
	const tasks = await Task.query();

	// SELECT * FROM tasks WHERE is_done = false ORDER BY due_by asc;
	const tasksTodo = await Task.query()
		.where({ is_done: false })
		.orderBy('due_by');

	// UPDATE tasks SET is_done = true WHERE id = 1;
	await Task.query()
		.patch({ is_done: true })
		.where({ id: 1 });

	// DELETE FROM tasks WHERE id = 1;
	await Task.query()
		.delete()
		.where({ id: 1 });
};
