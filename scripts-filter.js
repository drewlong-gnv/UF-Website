const programs = [
	{
		Program: 'Computer Science',
		id: 1,
		Type: 'Bachelors',
		Online: '',
		Pursuit: ['Technology', 'Art and Design'],
		College: 'Liberal Arts and Sciences',
	},
	{
		Program: 'Digital Arts and Sciences',
		id: 2,
		Type: 'Bachelors',
		Online: '',
		Pursuit: 'Technology',
		College: 'Liberal Arts and Sciences',
	},
	{
		Program: 'Telecommunication: Media and Society ',
		id: 3,
		Type: 'Bachelors',
		Online: '',
		Pursuit: 'Technology',
		College: 'Liberal Arts and Sciences',
	},
	{
		Program: 'Accounting',
		id: 4,
		Type: 'Bachelors',
		Online: '',
		Pursuit: 'Business',
		College: 'Business, Warrington College',
	},
	{
		Program: 'Accounting Minor',
		id: 5,
		Type: 'Bachelors',
		Online: '',
		Pursuit: 'Business',
		College: 'Business, Warrington College',
	},
	{
		Program: 'Accounting Minor UF Online',
		id: 6,
		Type: 'Bachelors',
		Online: 'Online only',
		Pursuit: 'Business',
		College: 'Business, Warrington College',
	},
	{
		Program: 'Actuarial Science Minor',
		id: 7,
		Type: 'Bachelors',
		Online: '',
		Pursuit: 'Business',
		College: 'Business, Warrington College',
	},
	{
		Program: 'Advanced Engineering Ceramics Certificate',
		id: 8,
		Type: 'Certificate',
		Online: '',
		Pursuit: 'Earth Sciences',
		College: 'Arts',
	},
	{
		Program: 'Advertising',
		id: 9,
		Type: 'Bachelors',
		Online: '',
		Pursuit: 'Communication',
		College: 'Liberal Arts and Sciences',
	},
	{
		Program: 'Advertising | Persuasive Messaging UF Online',
		id: 10,
		Type: 'Bachelors',
		Online: 'Online only',
		Pursuit: 'Communication',
		College: 'Liberal Arts and Sciences',
	},
	{
		Program: 'Aerospace Engineering',
		id: 11,
		Type: 'Bachelors',
		Online: '',
		Pursuit: 'Technology',
		College: 'Engineering, Herbert Wertheim College',
	},
	{
		Program: 'Aerospace Leadership Minor',
		id: 12,
		Type: 'Bachelors',
		Online: '',
		Pursuit: 'Technology',
		College: 'Engineering, Herbert Wertheim College',
	},
	{
		Program: 'African Languages',
		id: 13,
		Type: 'Bachelors',
		Online: '',
		Pursuit: 'Social Sciences',
		College: 'Liberal Arts and Sciences',
	},
	{
		Program: 'African Studies Minor',
		id: 14,
		Type: 'Bachelors',
		Online: '',
		Pursuit: 'Social Sciences',
		College: 'Liberal Arts and Sciences',
	},
	{
		Program: 'African-American Studies',
		id: 15,
		Type: 'Bachelors',
		Online: '',
		Pursuit: 'Social Sciences',
		College: 'Liberal Arts and Sciences',
	},
	{
		Program: 'African-American Studies Minor',
		id: 16,
		Type: 'Bachelors',
		Online: '',
		Pursuit: 'Social Sciences',
		College: 'Liberal Arts and Sciences',
	},
	{
		Program: 'Agricultural and Natural Resource Communication Minor',
		id: 17,
		Type: 'Bachelors',
		Online: '',
		Pursuit: 'Earth Sciences',
		College: 'Agricultural and Life Sciences',
	},
	{
		Program: 'Agricultural and Natural Resource Ethics and Policy Minor',
		id: 18,
		Type: 'Bachelors',
		Online: '',
		Pursuit: 'Earth Sciences',
		College: 'Agricultural and Life Sciences',
	},
	{
		Program: 'Agricultural and Natural Resource Law Minor',
		id: 19,
		Type: 'Bachelors',
		Online: '',
		Pursuit: 'Earth Sciences',
		College: 'Agricultural and Life Sciences',
	},
	{
		Program: 'Agricultural Curriculum and Development Minor',
		id: 20,
		Type: 'Bachelors',
		Online: '',
		Pursuit: 'Earth Sciences',
		College: 'Agricultural and Life Sciences',
	},
	{
		Program: 'Agricultural Education and Communication',
		id: 21,
		Type: 'Bachelors',
		Online: '',
		Pursuit: 'Earth Sciences',
		College: 'Agricultural and Life Sciences',
	},
	{
		Program: 'Agricultural Operations Management',
		id: 22,
		Type: 'Bachelors',
		Online: '',
		Pursuit: 'Earth Sciences',
		College: 'Agricultural and Life Sciences',
	},
	{
		Program: 'Agroecology and Sustainable Food Systems Certificate',
		id: 23,
		Type: 'Certificate',
		Online: '',
		Pursuit: 'Earth Sciences',
		College: 'Agricultural and Life Sciences',
	},
	{
		Program: 'American Indian and Indigenous Studies Minor',
		id: 24,
		Type: 'Bachelors',
		Online: '',
		Pursuit: 'Social Sciences',
		College: 'Liberal Arts and Sciences',
	},
	{
		Program: 'Animal Genetics Certificate',
		id: 25,
		Type: 'Certificate',
		Online: '',
		Pursuit: 'Animals',
		College: 'Liberal Arts and Sciences',
	},
	{
		Program: 'Animal Sciences',
		id: 26,
		Type: 'Bachelors',
		Online: '',
		Pursuit: 'Animals',
		College: 'Liberal Arts and Sciences',
	},
	{
		Program: 'Anthropology',
		id: 27,
		Type: 'Bachelors',
		Online: '',
		Pursuit: 'Social Sciences',
		College: 'Liberal Arts and Sciences',
	},
	{
		Program: 'Anthropology Minor',
		id: 28,
		Type: 'Bachelors',
		Online: '',
		Pursuit: 'Social Sciences',
		College: 'Liberal Arts and Sciences',
	},
	{
		Program: 'Anthropology Minor UF Online',
		id: 29,
		Type: 'Bachelors',
		Online: 'Online only',
		Pursuit: 'Social Sciences',
		College: 'Liberal Arts and Sciences',
	},
	{
		Program: 'Anthropology UF Online',
		id: 30,
		Type: 'Bachelors',
		Online: 'Online only',
		Pursuit: 'Social Sciences',
		College: 'Liberal Arts and Sciences',
	},
	{
		Program: 'Applied Physiology and Kinesiology',
		id: 31,
		Type: 'Bachelors',
		Online: '',
		Pursuit: 'Health and Wellness',
		College: 'Liberal Arts and Sciences',
	},
	{
		Program: 'Applied Theater for Health Certificate',
		id: 32,
		Type: 'Certificate',
		Online: '',
		Pursuit: 'Art and Design',
		College: 'Arts',
	},
	{
		Program: 'Arabic',
		id: 33,
		Type: 'Bachelors',
		Online: '',
		Pursuit: 'Communication',
		College: 'Liberal Arts and Sciences',
	},
	{
		Program: 'Arabic Language and Literature Minor',
		id: 34,
		Type: 'Bachelors',
		Online: '',
		Pursuit: 'Communication',
		College: 'Liberal Arts and Sciences',
	},
	{
		Program: 'Architecture',
		id: 35,
		Type: 'Bachelors',
		Online: '',
		Pursuit: 'Art and Design',
		College: 'Liberal Arts and Sciences',
	},
	{
		Program: 'Art Education Certificate',
		id: 36,
		Type: 'Certificate',
		Online: '',
		Pursuit: 'Art and Design',
		College: 'Liberal Arts and Sciences',
	},
	{
		Program: 'Art History',
		id: 37,
		Type: 'Bachelors',
		Online: '',
		Pursuit: 'Art and Design',
		College: 'Liberal Arts and Sciences',
	},
	{
		Program: 'Art History Minor',
		id: 38,
		Type: 'Bachelors',
		Online: '',
		Pursuit: 'Art and Design',
		College: 'Liberal Arts and Sciences',
	},
	{
		Program: 'Art History Minor | New World School of the Arts',
		id: 39,
		Type: 'Bachelors',
		Online: '',
		Pursuit: 'Art and Design',
		College: 'Liberal Arts and Sciences',
	},
	{
		Program: 'Art Minor',
		id: 40,
		Type: 'Bachelors',
		Online: '',
		Pursuit: 'Art and Design',
		College: 'Liberal Arts and Sciences',
	},
	{
		Program: 'Art | BA',
		id: 41,
		Type: 'Bachelors',
		Online: '',
		Pursuit: 'Art and Design',
		College: 'Arts',
	},
	{
		Program: 'Art | BFA',
		id: 42,
		Type: 'Bachelors',
		Online: '',
		Pursuit: 'Art and Design',
		College: 'Arts',
	},
	{
		Program:
			'Artificial Intelligence Fundamentals and Applications Certificate',
		id: 43,
		Type: 'Certificate',
		Online: '',
		Pursuit: 'Technology',
		College: 'Engineering, Herbert Wertheim College',
	},
	{
		Program: 'Asian Studies Minor',
		id: 44,
		Type: 'Bachelors',
		Online: '',
		Pursuit: 'Communication',
		College: 'Liberal Arts and Sciences',
	},
	{
		Program: 'Asian-American Studies Minor',
		id: 45,
		Type: 'Bachelors',
		Online: '',
		Pursuit: 'Communication',
		College: 'Liberal Arts and Sciences',
	},
	{
		Program: 'Astronomy and Astrophysics',
		id: 46,
		Type: 'Bachelors',
		Online: '',
		Pursuit: 'Earth Sciences',
		College: 'Liberal Arts and Sciences',
	},
	{
		Program: 'Arts in Medicine',
		id: 47,
		Type: 'Certificate',
		Online: 'Online only',
		Pursuit: 'Art and Design',
		College: 'Arts',
	},
	{
		Program: 'Computer Science',
		id: 48,
		Type: 'Doctoral',
		Online: '',
		Pursuit: 'Technology',
		College: 'Liberal Arts and Sciences',
	},
	{
		Program: 'Curriculum and Instruction',
		id: 49,
		Type: 'Masters',
		Online: '',
		Pursuit: 'Social Sciences',
		College: 'Education',
	},
	{
		Program: 'Curriculum and Instruction',
		id: 50,
		Type: 'Doctoral',
		Online: '',
		Pursuit: 'Social Sciences',
		College: 'Education',
	},
	{
		Program: 'Computer Science',
		id: 51,
		Type: 'Masters',
		Online: '',
		Pursuit: 'Technology',
		College: 'Liberal Arts and Sciences',
	},
	{
		Program: 'Linguistics',
		id: 52,
		Type: 'Bachelors',
		Online: '',
		Pursuit: 'Social Sciences',
		College: 'Liberal Arts and Sciences',
	},
	{
		Program: 'Linguistics',
		id: 53,
		Type: 'Masters',
		Online: '',
		Pursuit: 'Social Sciences',
		College: 'Liberal Arts and Sciences',
	},
	{
		Program: 'Linguistics',
		id: 54,
		Type: 'Doctoral',
		Online: '',
		Pursuit: 'Social Sciences',
		College: 'Liberal Arts and Sciences',
	},
]

$(() => {
	const $checkboxes = $('input[type=checkbox]')
	const $programs = $('#programs')
	const $form = $('form#search')
	const $input = $('input[type=search]')

	let searchIds = programs.map(({ id }) => id)
	let checkboxIds = programs.map(({ id }) => id)

	const filterFunc = (_, elem) => {
		const id = parseInt(elem.dataset.id, 10)
		return searchIds.includes(id) && checkboxIds.includes(id)
	}

	$checkboxes.on('change', () => {
		const values = Array.from(
			$checkboxes.filter(':checked').map((_, elem) => elem.value)
		)

		checkboxIds = programs
			.filter(({ Type }) => values.includes(Type))
			.map(({ id }) => id)

		$programs.children().hide()
		$programs.children().filter(filterFunc).show()
	})

	$form.on('submit', (e) => {
		e.preventDefault()

		const terms = $input.val()

		searchIds = programs
			.filter(({ Program }) =>
				Program.toLowerCase().includes(terms.toLowerCase())
			)
			.map(({ id }) => id)

		$programs.children().hide()
		$programs.children().filter(filterFunc).show()
	})

	const isEmpty = (val) => !val.trim()

	// TODO: listen to input clear event, if empty reset back to original
	$input.on('search', (event) => {
		if (isEmpty(event.currentTarget.value)) {
			console.log('empty search string, reset ul back to original values')
			$programs.children().show()
		}
	})
})
