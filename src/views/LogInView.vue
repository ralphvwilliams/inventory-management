<template>
  <div class="layout">
    <div class="form">
      <div class="logo">
        <img src="@/assets/logo.png" alt="" />
      </div>
      <div class="sign-up">
        <h1>Log In</h1>
        <img src="@/assets/purple.png" alt="" />
        <p>Sign in to start managing your inventory like a boss</p>
        <form @submit.prevent="logIn">
          <h3>Email</h3>
          <input type="text" name="email" v-model="userDetails.email" />
          <h3>Password</h3>
          <input
            type="password"
            name="password"
            v-model="userDetails.password"
          />
          <button type="submit">Login</button>
        </form>
        <div class="already">
          <span class="black">Already have an account?&nbsp;</span>
          <span class="blue" @click="pushtoHome">Sign Up</span>
        </div>
      </div>
    </div>
    <div class="sub">
      <img src="@/assets/login.png" alt="" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'LogInView',
  data() {
    return {
      userDetails: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    pushtoHome() {
      this.$router.push('/');
    },

    logIn() {
      axios
        .post(
          'https://enyata-inventory.herokuapp.com/api/v1/auth/login',
          this.userDetails
        )
        .then((response) => {
          localStorage.setItem('token', response.data.data.token);
          this.$router.push('/dashboard');
        });
    },
  },
};
</script>

<style scoped>
.layout {
  display: flex;
  gap: 60px;
  max-width: 100%;
}

.form {
  width: 33%;
  height: 100vh;
}

.sub {
  background-color: #873ab6;
  width: 100%;
  height: 100vh;
}

.logo {
  padding-top: 34px;
}

.logo,
.sign-up {
  margin-left: 60px;
}

.sign-up {
  margin-top: 88px;
}

.sign-up h1 {
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 130%;
  /* identical to box height, or 52px */
  letter-spacing: -0.06em;

  color: #1d2128;
}

.sign-up p {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  /* or 27px */
  width: 284px;
  color: #747880;
  margin-top: 22px;
}

form {
  margin-top: 48px;
}

form h3 {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */
  margin-top: 16px;
  color: #3a3f46;
}

input {
  width: 357px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #ced1d9;
  border-radius: 4px;
  padding-left: 20px;
}

button {
  background: #873ab6;
  box-shadow: 0px 16px 24px rgba(38, 86, 209, 0.2);
  border-radius: 8px;
  width: 357px;
  height: 56px;
  margin-top: 32px;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  /* identical to box height, or 27px */
  border: none;
  color: #ffffff;
}

.already {
  display: flex;
  align-items: center;
  margin-top: 16px;
}

.black {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  /* identical to box height, or 27px */
  text-align: center;
  color: #000000;
}

.blue {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  /* identical to box height, or 27px */
  text-align: center;
  color: #2656d1;
  cursor: pointer;
}

.sub {
  position: relative;
}
.sub img {
  position: absolute;
  top: 15%;
  left: 30%;
}

button {
  cursor: pointer;
}

@media only screen and (max-width: 420px) {
  .sub {
    display: none;
  }
}
</style>
