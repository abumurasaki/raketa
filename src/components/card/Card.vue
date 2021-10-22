<template>
  <div
    class="card card--medium relative"
    :class="{ 'card--short': short, 'card--long': long }"
  >
    <div :class="{ 'card-bar__time': long }">
      <p class="card__head">{{ title }}</p>
      <p class="card__body">{{ content }}</p>
      <p
        v-if="isChart"
        class="card__percents"
        :class="{ 'card__percents--decrease': percents[0] === '-' }"
      >
        {{ percents }}
      </p>
    </div>
    <div v-if="isChart" class="card-chart">
      <img src="@/assets/images/png/chart.png" alt="" class="card-chart__img" />
    </div>
    <div v-else-if="long" class="card-bar__wrap">
      <div class="card-bar__header">
        <span class="card-bar__text card-bar__text--blue">Получение</span>
        <span class="card-bar__text">Путь до точки доставки</span>
        <span class="card-bar__text card-bar__text--purple">Передача</span>
      </div>
      <div class="card-bar__mark">
        <p style="width: 31%" class="card-bar__area card-bar__area--blue">
          4 мин
        </p>
        <p style="width: 46%" class="card-bar__area">24 мин</p>
        <p style="width: 23%" class="card-bar__area card-bar__area--purple">
          4 мин
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "medium",
    },
    title: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
    percents: {
      type: String,
      default: "",
    },
    isChart: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    short() {
      return this.type === "short";
    },
    long() {
      return this.type === "long";
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  &--medium {
    width: calc(61% - 10px);
    display: flex;
    justify-content: space-between;
  }
  &--short {
    width: 39%;
  }
  &--long {
    width: 100%;
  }
  &__head {
    padding-bottom: 10px;
    line-height: 20px;
  }
  &__body {
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
  }
  &__percents {
    padding-top: 4px;
    font-size: 14px;
    line-height: 18px;
    color: #4caf50;
    font-weight: 400;
    &--decrease {
      color: #c90b0b;
    }
  }
  // if type long
  &-bar {
    &__wrap {
      width: 78%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &__header {
      display: flex;
      justify-content: flex-end;
    }

    &__mark {
      display: flex;
      max-width: 393px;
      height: 32px;
      overflow: hidden;
      border-radius: 4px;
      background: #efad02;
    }

    &__area {
      padding: 6px 11px;
      font-size: 14px;
      color: #fff;
      line-height: 20px;
      &--blue {
        background: #4287ff;
      }
      &--purple {
        background: #a551e0;
      }
    }
    &__text {
      position: relative;
      margin-left: 42px;
      line-height: 18px;
      font-size: 14px;
      color: #efad02;

      &::after {
        position: absolute;
        content: "";
        top: 0;
        left: -22px;
        width: 16px;
        height: 16px;
        background: #efad02;
        border-radius: 3px;
      }
      &:first-child {
        margin-left: 0;
      }
      &--blue {
        color: #4287ff;
        &:after {
          background: #4287ff;
        }
      }
      &--purple {
        color: #a551e0;
        &:after {
          background: #a551e0;
        }
      }
    }

    &__time {
      width: 18%;
      padding-bottom: 2px;
    }
  }
  &-chart {
    align-self: flex-end;
    height: 54px;
    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  @media screen and (max-width: 1050px) {
    &-bar__mark {
      max-width: unset;
    }
  }
}
</style>
