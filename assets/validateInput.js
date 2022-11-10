function validateInput(inputName, inputValue) {

  const validateTitle = (titleValue) => {
    if (titleValue.length < 5 || titleValue.length > 150) {
      return false;
    }
    return true;
  };

  const validateUrl = (urlValue) => {
    if (urlValue.length < 11 || urlValue.length > 150) {
        return false;
      }
    
    if (!urlValue.includes("https://www.youtube.com/watch?v=")) {
      return false
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
