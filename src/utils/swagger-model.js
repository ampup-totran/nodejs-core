const stringType = {
  type: 'string'
};

const intType = {
  type: 'integer'
};

const UserSignUp = {
  type: 'object',
  properties: {
    role: {
      type: 'string',
      enum: [ 'Partner', 'ampUp Sales', 'ampUp Tech' ]
    },
    company: stringType,
    name: stringType,
    email: stringType,
    password: stringType
  },
  required: [ 'role', 'company', 'name', 'email', 'password' ]
};

const Order = {
  type: 'object',
  properties: {
    company_name: stringType,
    address: stringType,
    contact_name: stringType,
    contact_phone: stringType,
    billing_contact_name: stringType,
    contact_email: stringType,
    community_manager_type: {
      type: 'string',
      enum: [ 'Basic', 'Lite', 'Pro' ],
      default: 'Basic'
    },
    locations: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: stringType,
          address: stringType,
          manager_name: stringType,
          manager_phone: stringType,
          manager_email: stringType,
          chargers: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                charger_model: stringType,
                quantity: intType
              }
            }
          }
        }
      }
    }
  },
  example: {
    company_name: 'ABC',
    address: '123 ABC',
    contact_name: 'Daniel',
    contact_phone: '123456789',
    billing_contact_name: 'ABC',
    contact_email: 'example@demo.io',
    community_manager_type: 'community',
    locations: [
      {
        name: 'ABC',
        address: '123 ABC',
        manager_name: 'Daniel',
        manager_phone: '123456789',
        manager_email: 'example@demo.io',
        chargers: [
          {
            charger_model: '123',
            quantity: 4
          }
        ]
      }
    ]
  }
};

module.exports = {
  UserSignUp,
  Order
};
