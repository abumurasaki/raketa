<template>
  <div v-click-outside="closeDropdown" class="filtration">
    <button class="filtration__btn" @click="showDrowdown = !showDrowdown">
      <span
        class="filtration__btn-arrow"
        :class="{ 'filtration__btn-arrow--rotate': !showDrowdown }"
        >{{ selectedBrand }}</span
      >
    </button>
    <div v-show="showDrowdown" class="filtration-dropdown">
      <!-- <div class="filtration-dropdown__container"> -->
      <p
        v-for="(item, i) in items"
        :key="i"
        class="filtration-dropdown__item"
        :class="{ 'filtration-dropdown__item--active': selectedId === i }"
        @click="selectItem(item, i)"
      >
        {{ item }}
      </p>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    filterBy: {
      type: String,
      default: "Бренд",
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      showDrowdown: false,
      selectedId: null,
      selectedBrand: this.filterBy,
    };
  },
  methods: {
    selectItem(item, val) {
      if (this.selectedId != val) {
        this.selectedId = val;
        this.selectedBrand = item;
        this.$emit("select", item);
      } else {
        this.selectedId = null;
        this.$emit("select", "");
        this.selectedBrand = this.filterBy;
      }
      this.showDrowdown = false;
    },
    closeDropdown() {
      this.showDrowdown = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.filtration {
  position: absolute;
  top: 11px;
  right: 0;

  &-dropdown {
    position: absolute;
    top: 40px;
    width: 202px;
    max-height: 150px;
    transform: translateX(-117px);
    overflow-y: scroll;
    background: #ffffff;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2),
      0px 10px 20px rgba(33, 52, 82, 0.2);
    border-radius: 6px;
    z-index: 1;

    // &__container {
    //   padding: 8px 0;
    //   z-index: 2;
    // }
    &__item {
      padding: 9px 12px;
      cursor: pointer;
      &--active {
        background: rgba(201, 11, 11, 0.15);
        position: relative;
        &::after {
          position: absolute;
          content: "";
          width: 14px;
          top: 12px;
          right: 12px;
          height: 12px;
          background: url("~@/assets/images/icons/check-mark.svg");
        }
      }
    }
  }

  &__btn {
    height: 36px;
    padding: 0 12px;
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
        transition: transform 0.2s;
        transform: translateY(-50%);
        background: url("~@/assets/images/icons/stroke.svg") center / contain
          no-repeat;
      }
      &--rotate {
        &:after {
          transform: translateY(-50%) rotate(-180deg);
        }
      }
    }
  }
}
</style>
