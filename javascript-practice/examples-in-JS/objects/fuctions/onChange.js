document.addEventListener("DOMContentLoaded", () => {
  const inputElement = document.querySelector("#inputField");

  const props = {
    callback: (newValue, settings) => {
      console.log(`Callback received: ${newValue}`);
      console.log(`Using settings:`, settings);
    },
  };

  const settings = {
    maxLength: 20,
    placeholder: "Type here...",
  };

  inputElement.setAttribute("placeholder", settings.placeholder);

  const remainingCharsElement = document.createElement("div");
  remainingCharsElement.id = "remainingChars";
  document.body.appendChild(remainingCharsElement);

  const updateRemainingChars = (value, maxLength) => {
    const remaining = maxLength - value.length;
    remainingCharsElement.textContent = `Remaining characters: ${remaining}`;
  };

  const handleOnChange = (event, props, settings) => {
    const newValue = event.target.value;
    if (newValue.length > settings.maxLength) {
      event.target.value = newValue.slice(0, settings.maxLength);
    }
    props.callback(newValue, settings);
    updateRemainingChars(newValue, settings.maxLength);
  };

  inputElement.addEventListener("input", (event) =>
    handleOnChange(event, props, settings)
  );

  updateRemainingChars(inputElement.value, settings.maxLength);
});
