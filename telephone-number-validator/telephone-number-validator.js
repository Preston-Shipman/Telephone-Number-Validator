function telephoneCheck(str) {
  const regex = /^(1[\s-]?)?(\([1-9]\d\d\)|[1-9]\d\d)[\s-]?[1-9]\d\d[\s-]?\d{4}$/g
  let regexTest = regex.test(str);
  if (regexTest === true) {
    return true;
  }
  else {
    return false;
  }

}

telephoneCheck("555-555-5555");
