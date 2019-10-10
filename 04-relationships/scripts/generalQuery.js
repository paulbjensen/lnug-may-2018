// Get all of the tasks
(async () =>
	await Task.query().eager('[dependentTasks, dependencyTasks]'))().then(data =>
	console.log(data)
);

// Find the dependentTasks of the 1st task
(async () => {
	const tasks = await Task.query()
		.where({ id: 1 })
		.limit(1);
	return await tasks[0].$relatedQuery('dependentTasks');
})().then(data => console.log(data));
