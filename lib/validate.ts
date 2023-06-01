export function login_email(email: string) {
  let error;
  if (!email) {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    error = "Invalid email address";
  }
  return error;
}

export function login_password(password: string) {
  let error;
  if (!password) {
    error = "Required";
  } else if (password.length < 8 || password.length > 20) {
    error = "Must be greater than 8 and less than 20 characters long";
  } else if (password.includes(" ")) {
    error = "Password can't contain blank spaces";
  }
  return error;
}

export function register_username(username: string) {
  let error;
  if (!username) {
    error = "Required";
  } else if (username.includes(" ")) {
    error = "Invalid username...!";
  }
  return error;
}

export function register_email(email: string) {
  let error;
  if (!email) {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    error = "Invalid email address";
  }
  return error;
}

export function register_password(password: string) {
  let error;
  if (!password) {
    error = "Required";
  } else if (password.length < 8 || password.length > 20) {
    error = "Must be greater than 8 and less than 20 characters long";
  } else if (password.includes(" ")) {
    error = "Invalid password";
  }
  return error;
}

export function register_confirm_password(
  confirm_password: string,
  password: string
) {
  let error;
  if (!confirm_password) {
    error = "Required";
  } else if (password !== confirm_password) {
    error = "Password not match...!";
  } else if (confirm_password.includes(" ")) {
    error = "Invalid confirm password";
  }
  return error;
}
