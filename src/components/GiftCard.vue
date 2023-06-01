<template>
    <!-- NOTE Content gos here -->
        <div class="card p-2 m-2 rounded elevation-3">
            <img class="rounded" :src="giftProp?.url" :alt="giftProp.tag">
        </div>
</template>

<script>
import { Gift } from '../models/Gift.js';

export default {
    props:{
        giftProp: {type: Gift, required: true}
    },
    setup() {
    return {

    }
    }
}
</script>


