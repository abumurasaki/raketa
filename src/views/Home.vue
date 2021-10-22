<template>
  <div class="home">
    <div class="container">
      <FiltrationPeriod class="home__period" />
      <div class="home-cards">
        <!-- left part -->
        <div class="home-cards__group">
          <!-- rows -->
          <div class="home-cards__row">
            <CardDoubleCol />
            <Card
              :type="'short'"
              :title="'Среднее время назначение'"
              :content="'5 мин'"
            />
          </div>

          <div class="home-cards__row">
            <Card
              :is-chart="true"
              :title="'Доставок'"
              :content="'1 234'"
              :percents="'-26%'"
            />
            <Card
              :type="'short'"
              :title="'Среднее время до точки отправки'"
              :content="'24 мин'"
            />
          </div>

          <div class="home-cards__row">
            <Card
              :is-chart="true"
              :title="'Отказов'"
              :content="'456'"
              :percents="'+6%'"
            />
            <Card
              :type="'short'"
              :title="'Среднее количество работы'"
              :content="'36 часов'"
            />
          </div>

          <div class="home-cards__row">
            <Card
              :is-chart="true"
              :title="'UTR'"
              :content="'1.6'"
              :percents="'+13%'"
            />
            <Card
              :type="'short'"
              :title="'Расстояние до точки доставки'"
              :content="'3.6 км'"
            />
          </div>

          <Card :type="'long'" :title="'Время доставки '" :content="'32 мин'" />
        </div>
        <!-- right part -->
        <div class="home-listing card">
          <div class="home-listing__header">
            <h1 class="home-listing__title">Курьеры</h1>
            <FiltrationBrand :fiter-by="filterBy" />
          </div>
          <TheListing />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheListing from "@/components/base/TheListing.vue";
import Card from "@/components/card/Card.vue";
import CardDoubleCol from "@/components/card/CardDoubleCol.vue";
import FiltrationPeriod from "@/components/filtration/FiltrationPeriod.vue";
import FiltrationBrand from "@/components/filtration/FiltrationBrand.vue";

export default {
  name: "Home",
  components: {
    FiltrationPeriod,
    Card,
    CardDoubleCol,
    TheListing,
    FiltrationBrand,
  },
  data() {
    return {
      filterBy: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  background: #edf3f8;
  min-height: calc(100vh - 70px);
  &__period {
    padding: 24px 0;
  }
  &-cards {
    display: flex;
    justify-content: space-between;
    &__group {
      width: calc(42% - 10px);
    }
    &__row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  &-listing {
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
  }
  @media screen and (max-width: 1050px) {
    &-cards {
      flex-direction: column;

      &__group {
        width: 100%;
        margin-bottom: 10px;
      }
    }
    &-listing {
      width: 100%;
    }
  }
}
</style>
