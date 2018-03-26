const findUser = query => {
  if (!query) return null;

  return {
    username: "foo",
    password: "password",
    email: "foo@bar.se",
    address: {
      street: "street",
      zip: "1337",
      city: "footown"
    }
  };
};

module.exports = {
  findUser
};
