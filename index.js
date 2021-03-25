/**
 * Create a wa.me link from a phone number
 * @param {string} number The phone number to be converted, must be a full number including country code
 */
exports.createFromNumber = (number) => {
  number = number.replace(/[^0-9]/g, "");
  return `https://wa.me/${number}`;
};

/**
 * Create a wa.me link from a phone number with a pre-filled message
 * @param {string} number The phone number to be converted, must be a full number including country code
 * @param {string} message The message to be encoded into the link
 */
exports.createFromNumberWithMessage = (number, message) => {
  number = number.replace(/[^0-9]/g, "");
  message = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${message}`;
};
