function validateInput(inputName, inputValue) {

  const validateTitle = (titleValue) => {
    if (titleValue.length < 5 || titleValue.length > 150) {
      return false;
    }
    return true;
  };

  const validateUrl = (titleUrl) => {
    if (titleUrl.length < 11 || titleUrl.length > 150) {
        return false;
      }
      return true;
  }

  switch (inputName) {
    case "title":
      return validateTitle(inputValue);
    case "url":
      return validateUrl(inputValue);
    default:
      return false;
  }
}

export default validateInput;
