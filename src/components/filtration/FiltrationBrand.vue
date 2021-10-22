<template>
  <div class="filtration">
    <button class="filtration__btn">
      <span class="filtration__btn-arrow">{{ filterBy }}</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    filterBy: {
      type: String,
      default: "Бренд",
    },
  },
};
</script>

<style lang="scss" scoped>
.filtration {
  position: absolute;
  top: 11px;
  right: 0;
  &__btn {
    width: 86px;
    height: 36px;
    padding: 9px 12px;
    border-radius: 6px;
    border: 1px solid #9ea6b4;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    &-arrow {
      padding-right: 17px;
      position: relative;
      &:after {
        position: absolute;
        content: "";
        top: 50%;
        right: 0;
        width: 10px;
        height: 6px;
        transform: translateY(-50%) rotate(180deg);
        background: url("~@/assets/images/icons/stroke.svg") center / contain
          no-repeat;
      }
    }
  }
}
</style>
