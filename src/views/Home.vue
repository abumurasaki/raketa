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
            <CardInfo
              :type="'short'"
              :title="'Среднее время назначение'"
              :content="'5 мин'"
            />
          </div>

          <div class="home-cards__row">
            <CardInfo
              :is-chart="true"
              :title="'Доставок'"
              :content="'1 234'"
              :percents="'-26%'"
            />
            <CardInfo
              :type="'short'"
              :title="'Среднее время до точки отправки'"
              :content="'24 мин'"
            />
          </div>

          <div class="home-cards__row">
            <CardInfo
              :is-chart="true"
              :title="'Отказов'"
              :content="'456'"
              :percents="'+6%'"
            />
            <CardInfo
              :type="'short'"
              :title="'Среднее количество работы'"
              :content="'36 часов'"
            />
          </div>

          <div class="home-cards__row">
            <CardInfo
              :is-chart="true"
              :title="'UTR'"
              :content="'1.6'"
              :percents="'+13%'"
            />
            <CardInfo
              :type="'short'"
              :title="'Расстояние до точки доставки'"
              :content="'3.6 км'"
            />
          </div>

          <CardInfo
            :type="'long'"
            :title="'Время доставки '"
            :content="'32 мин'"
          />
        </div>
        <!-- right part -->
        <TheListing />
      </div>
    </div>
  </div>
</template>

<script>
import TheListing from "@/components/base/TheListing.vue";
import CardInfo from "@/components/card/CardInfo.vue";
import CardDoubleCol from "@/components/card/CardDoubleCol.vue";
import FiltrationPeriod from "@/components/filtration/FiltrationPeriod.vue";

import "@/assets/scss/modules/card.scss";
export default {
  name: "Home",
  components: {
    FiltrationPeriod,
    CardInfo,
    CardDoubleCol,
    TheListing,
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
    padding-bottom: 15px;
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

  @media screen and (max-width: 1050px) {
    &-cards {
      flex-direction: column;

      &__group {
        width: 100%;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
