const programs =
[
  {
    Program: "Computer Science",
    id: 1,
    Type: "Bachelors"
  },
  {
    Program: "Digital Arts and Sciences",
    id: 2,
    Type: "Bachelors"
  },
  {
    "Program": "Telecommunication: Media and Society ",
    "id": 3,
    "Type": "Bachelors"
  },
  {
    "Program": "Accounting",
    "id": 4,
    "Type": "Bachelors"
  },
  {
    "Program": "Accounting Minor",
    "id": 5,
    "Type": "Bachelors"
  },
  {
    "Program": "Accounting Minor UF Online",
    "id": 6,
    "Type": "Bachelors"
  },
  {
    "Program": "Actuarial Science Minor",
    "id": 7,
    "Type": "Bachelors"
  },
  {
    "Program": "Advanced Engineering Ceramics Certificate",
    "id": 8,
    "Type": "Certificate"
  },
  {
    "Program": "Advertising",
    "id": 9,
    "Type": "Bachelors"
  },
  {
    "Program": "Advertising | Persuasive Messaging UF Online",
    "id": 10,
    "Type": "Bachelors"
  },
  {
    "Program": "Aerospace Engineering",
    "id": 11,
    "Type": "Bachelors"
  },
  {
    "Program": "Aerospace Leadership Minor",
    "id": 12,
    "Type": "Bachelors"
  },
  {
    "Program": "African Languages",
    "id": 13,
    "Type": "Bachelors"
  },
  {
    "Program": "African Studies Minor",
    "id": 14,
    "Type": "Bachelors"
  },
  {
    "Program": "African-American Studies",
    "id": 15,
    "Type": "Bachelors"
  },
  {
    "Program": "African-American Studies Minor",
    "id": 16,
    "Type": "Bachelors"
  },
  {
    "Program": "Agricultural and Natural Resource Communication Minor",
    "id": 17,
    "Type": "Bachelors"
  },
  {
    "Program": "Agricultural and Natural Resource Ethics and Policy Minor",
    "id": 18,
    "Type": "Bachelors"
  },
  {
    "Program": "Agricultural and Natural Resource Law Minor",
    "id": 19,
    "Type": "Bachelors"
  },
  {
    "Program": "Agricultural Curriculum and Development Minor",
    "id": 20,
    "Type": "Bachelors"
  },
  {
    "Program": "Agricultural Education and Communication",
    "id": 21,
    "Type": "Bachelors"
  },
  {
    "Program": "Agricultural Operations Management",
    "id": 22,
    "Type": "Bachelors"
  },
  {
    "Program": "Agroecology and Sustainable Food Systems Certificate",
    "id": 23,
    "Type": "Certificate"
  },
  {
    "Program": "American Indian and Indigenous Studies Minor",
    "id": 24,
    "Type": "Bachelors"
  },
  {
    "Program": "Animal Genetics Certificate",
    "id": 25,
    "Type": "Certificate"
  },
  {
    "Program": "Animal Sciences",
    "id": 26,
    "Type": "Bachelors"
  },
  {
    "Program": "Anthropology",
    "id": 27,
    "Type": "Bachelors"
  },
  {
    "Program": "Anthropology Minor",
    "id": 28,
    "Type": "Bachelors"
  },
  {
    "Program": "Anthropology Minor UF Online",
    "id": 29,
    "Type": "Bachelors"
  },
  {
    "Program": "Anthropology UF Online",
    "id": 30,
    "Type": "Bachelors"
  },
  {
    "Program": "Applied Physiology and Kinesiology",
    "id": 31,
    "Type": "Bachelors"
  },
  {
    "Program": "Applied Theater for Health Certificate",
    "id": 32,
    "Type": "Certificate"
  },
  {
    "Program": "Arabic",
    "id": 33,
    "Type": "Bachelors"
  },
  {
    "Program": "Arabic Language and Literature Minor",
    "id": 34,
    "Type": "Bachelors"
  },
  {
    "Program": "Architecture",
    "id": 35,
    "Type": "Bachelors"
  },
  {
    "Program": "Art Education Certificate",
    "id": 36,
    "Type": "Certificate"
  },
  {
    "Program": "Art History",
    "id": 37,
    "Type": "Bachelors"
  },
  {
    "Program": "Art History Minor",
    "id": 38,
    "Type": "Bachelors"
  },
  {
    "Program": "Art History Minor | New World School of the Arts",
    "id": 39,
    "Type": "Bachelors"
  },
  {
    "Program": "Art Minor",
    "id": 40,
    "Type": "Bachelors"
  },
  {
    "Program": "Art | BA",
    "id": 41,
    "Type": "Bachelors"
  },
  {
    "Program": "Art | BFA",
    "id": 42,
    "Type": "Bachelors"
  },
  {
    "Program": "Artificial Intelligence Fundamentals and Applications Certificate",
    "id": 43,
    "Type": "Certificate"
  },
  {
    "Program": "Asian Studies Minor",
    "id": 44,
    "Type": "Bachelors"
  },
  {
    "Program": "Asian-American Studies Minor",
    "id": 45,
    "Type": "Bachelors"
  },
  {
    "Program": "Astronomy and Astrophysics",
    "id": 46,
    "Type": "Bachelors"
  }
];
$(() => {
  const $checkboxes = $('input[type=checkbox]');
  const $programs = $('#programs');
  const $form = $('form#search');
  const $input = $('input[type=search]');

  let searchIds = programs.map(({ id }) => id);
  let checkboxIds = programs.map(({ id }) => id);

  const filterFunc = (_, elem) => {
    const id = parseInt(elem.dataset.id, 10);
    return searchIds.includes(id) && checkboxIds.includes(id);
  };

  $checkboxes.on('change', () => {
    const values = Array.from($checkboxes.filter(':checked')

.map((_, elem) => elem.value));

    checkboxIds = programs.filter(({ Type }) => (
      values.includes(Type)
    )).map(({ id }) => id);

    $programs.hide();
    $programs.filter(filterFunc).show();
  });

  $form.on('submit', (e) => {
    e.preventDefault();

    const terms = $input.val();

    searchIds = programs.filter(({ Program }) => (
      Program.toLowerCase().includes(terms.toLowerCase())
    )).map(({ id }) => id);

    $programs.hide();
    $programs.filter(filterFunc).show();
  });
});