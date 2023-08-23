const verifyProperties = (data: { [key: string]: any }, keys: string[]) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const key of keys) {
    expect(data).toHaveProperty(key);
  }
};

export default verifyProperties;
