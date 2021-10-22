<template>
  <div class="listing">
    <ul class="listing-header">
      <li class="listing-header__item listing__col-id">ID</li>
      <li class="listing-header__item listing__col-brand">БРЕНД</li>
      <li class="listing-header__item listing__col-model">МОДЕЛЬ</li>
      <li class="listing-header__item listing__col-model">ДОСТАВОК</li>
      <li class="listing-header__item listing__col-brand">ОТКАЗОВ</li>
      <li class="listing-header__item listing__col-id">UTR</li>
    </ul>

    <div class="listing-body__wrap">
      <div v-for="(item, id) in list" :key="id">
        <ul
          v-for="(model, i) in item.models"
          :key="model + i"
          class="listing-body"
        >
          <li class="listing__col-id">{{ id + i.toString() }}</li>
          <li class="listing__col-brand">{{ item.brand }}</li>
          <li class="listing__col-model">{{ model }}</li>
          <li class="listing__col-model">{{ i }}</li>
          <li class="listing__col-brand">{{ id }}</li>
          <li class="listing__col-id">1.6</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: null,
    };
  },
  created() {
    fetch(
      "https://raw.githubusercontent.com/matthlavacka/car-list/master/car-list.json"
    )
      .then((res) => res.json())
      .then((data) => {
        this.list = data;
      });
  },
};
</script>

<style lang="scss" scoped>
.listing {
  &-header {
    display: flex;
    padding-bottom: 16px;
    color: #9ea6b4;
    border-bottom: 1px solid #dadfe5;

    &__item {
      position: relative;
      line-height: 18px;
      cursor: pointer;

      &:after {
        position: absolute;
        content: "";
        width: 24px;
        height: 18px;
        background: url("~@/assets/images/icons/sort.svg") center / contain
          no-repeat;
      }
    }
  }

  &-body {
    display: flex;
    padding: 16px 0 15px;
    line-height: 20px;
    font-weight: 400;
    border-bottom: 1px solid #dadfe5;

    &__wrap {
      max-height: 505px;
      overflow: scroll;
    }
  }

  &__col {
    &-id {
      width: 10%;
    }
    &-brand {
      width: 20%;
    }
    &-model {
      width: 30%;
    }
  }
}
</style>
