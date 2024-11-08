export const removeComma = (amount) => {
    let valueClean = amount.replace(/,/g, "");
    let doubleValue = parseFloat(valueClean);
    return doubleValue;
  };
  
  export const numericOnly = (number) => {
    let newNumber = number;
    if (/^\d*\.?\d*$/.test(newNumber)) {
      return newNumber;
    }
  };
  