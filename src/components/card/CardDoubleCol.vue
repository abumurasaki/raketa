<template>
  <div class="card card-double">
    <div class="card-double__column">
      <p class="card-double__title">Всего</p>
      <p class="card-double__content">1 245</p>
    </div>
    <div class="card-double__column">
      <p class="card-double__title">Активных</p>
      <p class="card-double__content card-double__content--green">645</p>
    </div>
  </div>
</template>

<script>
import "@/assets/scss/modules/card.scss";
export default {
  name: "CardDoubleCol",
};
</script>

<style lang="scss" scoped>
.card-double {
  width: calc(61% - 10px);
  padding: 0;
  min-height: 122px;
  display: flex;

  &__column {
    width: 50%;
    height: 100%;
    padding: 20px;
    &:first-child {
      border-right: 2px solid #eef2f7;
    }
  }
  &__title {
    padding-bottom: 18px;
  }
  &__content {
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;

    &--green {
      color: #369f3a;
    }
  }
}
</style>
