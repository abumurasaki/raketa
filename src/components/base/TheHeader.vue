<template>
  <div class="header">
    <div class="container relative">
      <div class="header__logo">
        <router-link to="/">
          <img src="@/assets/images/icons/horizontal-logo.svg" alt="logo" />
        </router-link>
      </div>
      <nav>
        <ul class="header__list">
          <li class="header__item pointer">План и факт</li>
          <li class="header__item pointer">Общие показатели</li>
          <li class="header__item pointer">Партнеры</li>
          <li class="header__item pointer header__item--active">Курьеры</li>
          <li class="header__item pointer">Заказы</li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  height: 70px;
  background: #fff;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2),
    0px 4px 10px rgba(33, 52, 82, 0.04);

  &__logo {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  &__list {
    padding: 25px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__item {
    display: block;
    &:not(:first-child) {
      margin-left: 32px;
    }
    &--active {
      color: #c90b0b;
    }
  }
}
.flex {
  display: flex;
}
.relative {
  position: relative;
}
</style>
