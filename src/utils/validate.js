import Joi from 'joi';

import { USER_ACTIONS } from './constanst';

/**
 * @param user_action {String} login or sign-up?
 * @param args {Object} The arguments
 * @param [args.name] {String} The name of User
 * @param args.email {String} The email of User
 * @param args.password {String} The password of User
 * @param [args.company] {String} The company of User
 * @param [args.role] {String} The role of User
 */
function validateUserInfo(user_action, args) {
  const { SIGN_UP, LOGIN } = USER_ACTIONS;
  if (user_action !== LOGIN && user_action !== SIGN_UP) {
    return {
      value: {},
      error: 'user_action is invalid'
    };
  }

  if (user_action === SIGN_UP) {
    const schema = Joi.object({
      name: Joi.string()
        .min(1)
        .max(255)
        .required()
        .error(new Error('Missing or wrong parameter: name')),
      email: Joi.string()
        .email()
        .required()
        .error(new Error('Missing or wrong parameter: email')),
      password: Joi.string()
        .regex(/^[a-zA-Z0-9#?!@$%^&*-<>]{6,30}$/)
        .required()
        .error(new Error('Missing or wrong parameter: password')),
      company: Joi.string()
        .min(1)
        .max(255)
        .required()
        .error(new Error('Missing or wrong parameter: company')),
      role: Joi.string()
        .min(1)
        .max(255)
        .required()
        .error(new Error('Missing or wrong parameter: role')),
      partner_code: Joi.string()
        .min(1)
        .max(255)
        .required()
        .error(new Error('Missing or wrong parameter: partner_code'))
    });
    return schema.validate(args);
  }

  const schema = Joi.object({
    email: Joi.string()
      .email()
      .required()
      .error(new Error('Missing or wrong parameter: email')),
    password: Joi.string()
      .regex(/^[a-zA-Z0-9#?!@$%^&*-<>]{6,30}$/)
      .required()
      .error(new Error('Missing or wrong parameter: password'))
  });

  return schema.validate(args);
}

module.exports = {
  validateUserInfo
};
