const capitalize = (string) => {
  let firstStr = string[0].toUpperCase();
  if(string.charAt(0) === string[0]) 
    string = firstStr + string.slice(1);
    return string;
}

export default capitalize;
