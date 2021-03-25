/**
 * Create a wa.me link from a phone number
 * @param {string} number The phone number to be converted, must be a full number including country code
 */
exports.createFromNumber = (number) => {
  number = number.replace(/[^0-9]/g, "");
  return `https://wa.me/${number}`;
};
