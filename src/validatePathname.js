const validatePathname = (pathname, reExportsFileDir) => {
  const validator = {
    validateConditionA(pathname) {
      return pathname.includes(reExportsFileDir);
    },

    validateConditionB(pathname) {
      return !pathname.includes('generateBarrelFile');
    },

    validateConditionC(pathname) {
      return !pathname.includes('.DS_Store');
    },
  };

  const validators = Object.entries(validator);

  const results = validators.map(([_, validate]) => validate(pathname));

  if (!results.includes(false)) {
    return true;
  }
};

export default validatePathname;
