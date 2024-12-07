function handleOnChange(event, props, settings) {
  const newValue = event.target.value;
  console.log("New value:", newValue);

  console.log("Settings object:", settings);

  if (props && typeof props.callback === "function") {
    props.callback(newValue, settings);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const inputElement = document.getElementById("textInput");

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

  inputElement.addEventListener("input", (event) =>
    handleOnChange(event, props, settings)
  );
});
