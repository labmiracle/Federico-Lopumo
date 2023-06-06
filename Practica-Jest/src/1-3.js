const adn = (stringADN) => {
    if (stringADN === "") {
      return "";
    }
  
    const basesCanonicas = ["C", "T", "A", "G"];
    let result = [...new Set(stringADN)].filter((e) =>
      basesCanonicas.includes(e)
    );
  
    return result.join("");
  };
  
  module.exports = { adn };