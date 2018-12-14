// This will validate data using Joi
// Including Joi
const Joi = require("joi");

// Creating a module with a register method from express
module.exports = {
  register(req, res, next) {
    // Validating an schema object with Joi
    const schema = {
      // Email has to be string and email type
      email: Joi.string().email(),
      password: Joi.string().regex(
        // Password has to contain lower case a-z, upper case A-Z, # 0-9, and be 8-32 char long
        new RegExp("^[a-zA-Z0-9]{8,32}$")
      )
    };
    // Using the schema, validate the requested body against the schema
    const { error, value } = Joi.validate(req.body, schema);

    if (error) {
      // If there is an error, get the detail of where it is
      switch (error.details[0].context.key) {
        case "email":
          res.status(400).send({
            error: "You must provide a valid email address"
          });
          break;

        case "password":
          res.status(400).send({
            error: `The password provided failed to match the following rules:
            <br>
            1. It must contain ONLY the following characters: lower case, upper case, numerics.
            <br>
            2. It must be at least 8 characters in length and not greater than 32 characters.
            `
          });
          break;
        default:
          res.status(400).send({
            error: "Invalid registration information"
          });
      }
    } else {
      next();
    }
  }
};
