<template>
  <div class="listing card">
    <div class="listing__header">
      <h1 class="listing__title">Курьеры</h1>
      <FiltrationBrand
        v-model="filterBy"
        :items="brands"
        @select="selectBrand"
      />
    </div>

    <ul class="listing-nav">
      <li class="listing-nav__item listing__col-id">ID</li>
      <li class="listing-nav__item listing__col-brand">БРЕНД</li>
      <li class="listing-nav__item listing__col-model">МОДЕЛЬ</li>
      <li class="listing-nav__item listing__col-model">ДОСТАВОК</li>
      <li class="listing-nav__item listing__col-brand">ОТКАЗОВ</li>
      <li class="listing-nav__item listing__col-id">UTR</li>
    </ul>

    <div class="listing-body__wrap">
      <div v-for="(item, id) in filteredList" :key="id">
        <div
          v-for="(model, i) in item.models"
          :key="model + i"
          class="listing-body"
        >
          <div class="listing__col-id">{{ id + i.toString() }}</div>
          <div class="listing__col-brand">{{ item.brand }}</div>
          <div class="listing__col-model">{{ model }}</div>
          <div class="listing__col-model">{{ i }}</div>
          <div class="listing__col-brand">{{ id }}</div>
          <div class="listing__col-id">1.6</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FiltrationBrand from "@/components/filtration/FiltrationBrand.vue";
export default {
  components: {
    FiltrationBrand,
  },
  data() {
    return {
      list: null,
      filterBy: null,
      brands: [],
    };
  },
  created() {
    fetch(
      "https://raw.githubusercontent.com/matthlavacka/car-list/master/car-list.json"
    )
      .then((res) => res.json())
      .then((data) => {
        this.list = data;
        data.map((el) => {
          this.brands.push(el.brand);
        });
      });
  },
  computed: {
    filteredList() {
      return this.filterBy
        ? this.list.filter((el) => el.brand === this.filterBy)
        : this.list;
    },
  },
  methods: {
    selectBrand(item) {
      console.log(item);
      this.filterBy = item;
    },
  },
};
</script>

<style lang="scss" scoped>
.listing {
  padding-bottom: 10px;
  width: 58%;
  &__header {
    position: relative;
  }
  &__title {
    display: inline-block;
    font-size: 24px;
    line-height: 36px;
    padding-bottom: 37px;
  }
  &-nav {
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
      overflow-y: scroll;
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
  @media screen and (max-width: 1050px) {
    width: 100%;
  }
}
</style>
