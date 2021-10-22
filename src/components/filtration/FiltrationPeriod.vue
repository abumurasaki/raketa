<template>
  <div>
    <div class="period">
      <div class="period-filter pointer">
        <span class="period-filter__item period-filter__item--left"
          >Сегодня</span
        >
        <span class="period-filter__item period-filter__item--active"
          >7 дней</span
        >
        <span class="period-filter__item period-filter__item--right"
          >30 дней</span
        >
      </div>
      <!-- calendar -->
      <div class="period-calendar pointer">Выбрать период</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FiltrationPeriod",
};
</script>

<style lang="scss" scoped>
.period {
  height: 36px;
  display: flex;

  &-filter {
    background: hsl(211, 27%, 85%);
    border-radius: 6px;
    margin-right: 12px;
    display: flex;
    &__item {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 12px;
      &--left {
        border-right: 2px solid #edf3f8;
      }
      &--right {
        border-left: 2px solid #edf3f8;
      }
      &--active {
        color: #fff;
        background: #2f3747;
      }
    }
  }

  &-calendar {
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 12px 0 36px;
    background: #cdd7e2;
    border-radius: 6px;
    &:after {
      position: absolute;
      content: "";
      left: 12px;
      width: 16px;
      height: 16px;
      background: url("~@/assets/images/icons/calendar.svg");
    }
  }
}
</style>
