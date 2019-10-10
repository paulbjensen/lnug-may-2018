(async () =>
	await Task.query().insertGraph({
		name: 'Make a nice meal',
		dependentTasks: [
			{ name: 'Decide what to eat, get recipe and buy the ingredients' },
			{ name: 'Make the recipe with the ingredients' }
		]
	}))();
