
<template>

    <div>
        <div v-for="(group, key) in groups" :key="'g'+key" class="card-group">
            
            <span class="md-display-1">{{ group.title }}</span>

            <div>
                
                <md-card class="tech-card" v-for="(card, ckey) in group.cards" :key="'c'+ckey">
                    <md-card-media>
                        <img :src="card.image">
                    </md-card-media>

                    <md-card-content align="center">
                        {{ card.title }}
                    </md-card-content>
                </md-card>

            </div>

        </div>
    </div>

</template>

<script>
export default {
    name: 'card-list',
    props: {
        groups: Array
    },
    data() {
        return {

        }
    }
}
</script>

<style scoped>

    .card-group span.md-display-1 + div {
        padding: 10px;
    }

    .tech-card {
        width: 120px;
        margin: 4px;
        display: inline-block;
        vertical-align: top;
    }

    .tech-card .md-card-content {
        padding: 5px;
    }

</style>
