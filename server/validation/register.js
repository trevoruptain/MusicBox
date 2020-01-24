const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateRegisterInput(data) {
    data.name = validText(data.name) ? data.name : "";
    data.email = validText(data.email) ? data.email : "";
    data.password = validText(data.password) ? data.password : "";

    if (Validator.isEmpty(data.name)) {
        return { message: "Name cannot be blank", isValid: false}
    }
  
    if (!Validator.isEmail(data.email)) {
      return { message: "Email is invalid", isValid: false };
    }
  
    if (Validator.isEmpty(data.email)) {
      return { message: "Email field is required", isValid: false };
    }

    if (!Validator.isLength(data.password, { min: 6, max: 16 })) {
        return { message: "Password must be between 6 and 16 characters", isValid: false}
    }
  
    return {
      message: "",
      isValid: true
    };
};