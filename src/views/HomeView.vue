<template>
  <div class="layout">
    <div class="form">
      <div class="logo">
        <img src="@/assets/logo.png" alt="" />
      </div>
      <div class="sign-up">
        <h1>Sign Up</h1>
        <img class="rect" src="@/assets/Rectangle.png" alt="" />
        <p>Register now and start managing your inventory like a boss</p>
        <form @submit.prevent="signUp">
          <h3>Name</h3>
          <input type="text" name="name" v-model="userInfo.fullName" />
          <h3>Email</h3>
          <input type="text" name="email" v-model="userInfo.email" />
          <h3>Shop Name</h3>
          <input type="text" name="shopname" v-model="userInfo.shopName" />
          <h3>Password</h3>
          <input type="password" name="password" v-model="userInfo.password" />
          <h3>Password Confirm</h3>
          <input
            type="password"
            name="confirm"
            v-model="userInfo.confirmPassword"
          />
          <button type="submit">Sign Up</button>
        </form>
        <div class="already">
          <span class="black">Already have an account?&nbsp;</span>
          <span class="blue" @click="pushtoLogin">Login</span>
        </div>
      </div>
    </div>
    <div class="sub">
      <img src="@/assets/sub.png" alt="" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
// @ is an alias to /src
// {
//     "fullName": "Ralph Williams",
//     "email": "ralph@mail.com",
//     "shopName": "Enyata",
//     "password": "12345678",
//     "confirmPassword": "12345678"
// }

export default {
  name: 'HomeView',
  components: {},
  data() {
    return {
      userInfo: {
        fullName: '',
        email: '',
        shopName: '',
        password: '',
        confirmPassword: '',
      },
    };
  },
  methods: {
    pushtoLogin() {
      this.$router.push('/login');
    },

    signUp() {
      axios
        .post(
          'https://enyata-inventory.herokuapp.com/api/v1/auth/signup',
          this.userInfo
        )
        .then((response) => alert(response.data.message));
    },
  },
};
</script>

<style scoped>
.layout {
  display: flex;
  gap: 60px;
}

.rect {
  margin-top: 2px;
}

.form {
  width: 33%;
  height: 100vh;
}

.sub {
  background-color: blue;
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
  background: #2656d1;
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
  cursor: pointer;
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
</style>
