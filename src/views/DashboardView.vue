<template>
  <div class="layout">
    <Nav :menu="true"></Nav>
    <div class="main">
      <div class="navbar">
        <div class="profile-info">
          <div class="profile-pic">
            <p>RV</p>
          </div>
          <p class="name">Ralph Williams</p>
        </div>
      </div>
      <div class="main-info">
        <h2>Overview</h2>
        <div class="cards">
          <div class="card" v-for="card in cards">
            <p>{{ card.head }}</p>
            <h3>{{ card.data }}</h3>
          </div>
        </div>
        <div class="last">
          <p>Recently Added</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';
export default {
  name: 'DashboardView',
  components: { Nav },
  data() {
    return {
      cards: [
        {
          head: 'Product Types',
          data: '24',
        },
        {
          head: 'Categories',
          data: '3',
        },
        {
          head: 'Sales - July',
          data: 'GHS 24,000',
        },
        {
          head: 'Inventory Value',
          data: 'GHS 12,260',
        },
      ],
    };
  },
};
</script>

<style scoped>
.layout {
  display: flex;
}

.main {
  width: 100%;
  background: #f3f3f3;
}

.navbar {
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  height: 80px;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 80%;
}

.profile-info {
  display: flex;
  align-items: center;
  gap: 16px;
}

.profile-pic {
  border-radius: 100%;
  background-color: #b2bdfa;
  padding: 10px;
}

.name {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  color: #000000;
}

.profile-pic p {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  /* or 27px */

  color: #4057d3;
}

.main-info {
  margin-left: 4%;
}

.main-info h2 {
  margin-top: 32px;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 150%;
  /* identical to box height, or 54px */
  letter-spacing: -0.04em;

  color: #1d2128;
}

.cards {
  display: flex;
  gap: 16px;
  margin-top: 10px;
  flex-wrap: wrap;
}

.card {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  width: 244px;
  padding: 16px 40px 16px 32px;
  height: 99px;
}

.last {
  margin-top: 90px;
}

.last p {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  /* identical to box height, or 27px */

  color: #000000;
}

.card p {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  /* or 19px */

  color: #595f69;
}

.card h3 {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 150%;
  /* identical to box height, or 42px */

  color: #1d2128;
}
</style>
