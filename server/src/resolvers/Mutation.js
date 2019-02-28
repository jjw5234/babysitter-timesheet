const auth = require("./mutations/auth");
const createSittee = require("./mutations/createSitte");
const {
  createOrUpdateDate,
  createDate
} = require("./mutations/createOrUpdateDate");
const stripe = require("./mutations/Stripe");

const Mutation = {
  ...auth,
  ...createSittee,
  createOrUpdateDate,
  createDate,
  ...stripe
};

module.exports = {
  Mutation
};
