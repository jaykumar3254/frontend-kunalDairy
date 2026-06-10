const REMEMBER_ME_KEY = "remember_me";

export const saveRememberMe = async (
  value: boolean
) => {
  localStorage.setItem(
    REMEMBER_ME_KEY,
    JSON.stringify(value)
  );
};

export const getRememberMe = async () => {
  const value =
    localStorage.getItem(
      REMEMBER_ME_KEY
    );

  return value
    ? JSON.parse(value)
    : false;
};