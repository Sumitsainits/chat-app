import React from "react";

export default function Login() {
  return (
    <div>
      <form id="user-login-form" action="login" method="post">
        <label htmlFor="username-email">Email</label>
        <input id="username-email" name="email" type="email" required />
        <br />
        <label htmlFor="username-password">Password</label>
        <input
          id="username-password"
          name="password"
          type="password"
          required
        />
        <br />
        <input type="submit" title="Login" />

        <br />
        <br />
        <p>
          Create a new account. <a href="/register">Register</a>
        </p>
      </form>
    </div>
  );
}
