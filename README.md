# wa-me-generator

_A simple module to create wa.me links_

A wa.me link is used to open a WhatsApp Chat with a person using their phone number.

## Usage

Install the package: `npm install wa-me-generator`

```javascript
const waMe = require("wa-me-generator");

waMe.createFromNumber("+56 (1356) 12345-67");
// returns: "https://wa.me/5613561234567"
```
