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


