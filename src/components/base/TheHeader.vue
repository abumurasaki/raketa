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
      <div class="header__burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
};
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

  &__burger {
    display: none;
    position: relative;
    margin-left: auto;
    width: 35px;
    height: 70px;
    cursor: pointer;
    & span {
      display: block;
      position: absolute;
      height: 4px;
      width: 100%;
      background: #c90b0b;
      border-radius: 15px;
    }

    & span:nth-child(1) {
      top: calc(50% - 14px);
    }

    & span:nth-child(2) {
      top: calc(50% - 4px);
    }

    & span:nth-child(3) {
      top: calc(50% + 6px);
    }
  }
  &__item {
    display: block;
    &:not(:first-child) {
      margin-left: 32px;
    }
    &--active {
      color: #c90b0b;
      position: relative;
      &:after {
        position: absolute;
        content: "";
        left: 0;
        bottom: 0;
        width: 100%;
        transform: translateY(26px);
        border-radius: 6px;
        border-bottom: 3px solid #c90b0b;
      }
    }
  }
  @media screen and (max-width: 950px) {
    &__list {
      display: none;
    }
    &__burger {
      display: block;
    }
  }
}
</style>
