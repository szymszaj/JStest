const formData = {
  email: "test@gmail.com",
  password: "123",
  age: 17,
  terms: false,
};

const validationRules = [
  {
    field: "email",
    validate: (val) => val.includes("@"),
    message: "Email musi zawierać @",
  },
  {
    field: "password",
    validate: (val) => val.length >= 8,
    message: "Hasło musi mieć min. 8 znaków",
  },
  {
    field: "age",
    validate: (val) => val >= 18,
    message: "Musisz mieć min. 18 lat",
  },
  {
    field: "terms",
    validate: (val) => val === true,
    message: "Musisz zaakceptować regulamin",
  },
];

const errors = validationRules
  .filter((rule) => !rule.validate(formData[rule.field]))
  .map((rule) => ({ field: rule.field, message: rule.message }));

const isValid = errors.length === 0;

console.log("Błędy:", errors);
console.log("Formularz poprawny?", isValid);
