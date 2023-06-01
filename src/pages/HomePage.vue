<template>
  <section class="row">
    
    <div class="col-md-3 col-sm-4 col-12" 
    v-for="g in gifts" 
    :key="g.id">
      <GiftCard :giftProp="g"/>
    </div>

  </section>
</template>

<script>
import { onMounted, computed } from 'vue';
import { AppState } from '../AppState.js'
import { giftsService } from '../services/GiftsService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import GiftCard from '../components/GiftCard.vue';

export default {
    setup() {
        async function getGiftsFromApi() {
            try {
                await giftsService.getGiftsFromApi();
            }
            catch (error) {
                logger.log(error);
                Pop.error(error.message, "error");
            }
        }
        onMounted(() => getGiftsFromApi());
        return {
            gifts: computed(() => AppState.gifts)
        };
    },
    components: { GiftCard }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
