import React from "react";

export default function Login() {
  return (
    <div>
      <form id="user-registration-form" action="/register" method="post">
        <label htmlFor="username-input">Username</label>
        <input id="username-input" name="username" required />
        <br />
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
        <input type="submit" title="Submit" />
        <input type="reset" title="Reset" />
        <br />
        <br />
        <p>
          Have a account <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
}
