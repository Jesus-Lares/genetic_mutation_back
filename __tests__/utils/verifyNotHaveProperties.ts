const verifyNotHaveProperties = (data: { [key: string]: any }, keys: string[]) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const key of keys) {
    expect(data).not.toHaveProperty(key);
  }
};

export default verifyNotHaveProperties;
