<template>
  <div class="nav">
    <div class="logo">
      <img src="@/assets/dashLogo.png" alt="" />
    </div>
    <div class="nav-info">
      <div
        class="categories"
        :style="[menu ? { background: 'blue' } : { background: '#151923' }]"
      >
        <img src="@/assets/dashboard.png" alt="" />
        <p>Dashboard</p>
      </div>
      <div class="categories">
        <img src="@/assets/Inventory.png" alt="" />
        <p>Inventory</p>
      </div>
      <div class="categories">
        <img src="@/assets/categories.png" alt="" />
        <p>Categories</p>
      </div>
      <div class="categories">
        <img src="@/assets/settings.png" alt="" />
        <p>Account Settings</p>
      </div>
    </div>
    <div class="bottom">
      <p>Logout</p>
      <img src="@/assets/logout.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: ['menu'],
  data() {
    return {
      cat: true,
    };
  },
};
</script>

<style scoped>
.nav {
  width: 22%;
  height: 100vh;
  background-color: #151923;
  position: relative;
}

.logo {
  padding-top: 34px;
}

.logo,
.nav-info,
.bottom {
  margin-left: 30px;
}

.nav-info {
  margin-top: 104px;
}

.categories {
  margin-top: 5px;
  width: 263px;
  height: 60px;
  padding: 16px 32px 16px 24px;
  background: #151923;
  border-radius: 8px;
  display: flex;
  gap: 18px;
  align-items: center;
}

.bottom {
  position: absolute;
  display: flex;
  margin-right: 30px;
  gap: 100%;
  /* justify-content: stretch; */
  align-items: center;
  bottom: 20px;
}

p {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  /* identical to box height, or 27px */

  color: #ffffff;
}
</style>
