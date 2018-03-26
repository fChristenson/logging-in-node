const isPrivate = str => {
  return (
    /.*password.*/.test(str) ||
    /.*street.*/.test(str) ||
    /.*email.*/.test(str) ||
    /.*zip.*/.test(str) ||
    /.*city.*/.test(str)
  );
};

const walk = obj => {
  const tmp = Object.assign({}, obj);
  const keys = Object.keys(tmp);

  keys.forEach(key => {
    const val = tmp[key];

    if (typeof val === "object") {
      tmp[key] = walk(val);
    }

    if (isPrivate(key)) {
      tmp[key] = "*****";
    }
  });

  return tmp;
};

class Mask {
  constructor(log) {
    this.log = log;
  }

  info() {
    const maskedArgs = walk(arguments);
    return this.log.info(maskedArgs);
  }
}

module.exports = Mask;
