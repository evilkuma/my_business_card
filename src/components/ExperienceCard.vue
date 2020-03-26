<template>
  <div class="expcard">
    <div class="card-image img-raised rounded-circle img-fluid">
        <img :src="image" />
    </div>
    <div class="card-content">
        <div class="card-heading">
            <div class="card-title">
                <span>{{ company }}</span>
                <template v-if="vacancies && vacancies.length">
                    <span class="bar">&nbsp;|&nbsp;</span>
                    <small>{{ vacancies.join(' | ') }}</small>
                </template>
            </div>
            <div class="card-date">{{ date }}</div>
        </div>
        <badge :type="'success'" v-for="(bagde, key) in badges" :key="'b'+key">{{ bagde }}</badge>
        <div>
            <md-list class="card-details">
                <md-list-item v-for="(requirement, key) in requirements" :key="'r'+key">
                    <md-icon>keyboard_arrow_right</md-icon>
                    <span class="md-list-item-text">{{ requirement }}</span>
                </md-list-item>
            </md-list>
        </div>
        <badge :type="'default'" v-for="(bagde, key) in technology" :key="'t'+key">{{ bagde }}</badge>
    </div>
  </div>
</template>

<script>
import Badge from './Badge.vue'

export default {
    name: "exp-card",
    props: {
        company: {
            type: String,
            default: "company"
        },
        vacancies: Array,
        date: String,
        badges: Array,
        requirements: Array,
        technology: Array,
        image: String
    },
    components: { Badge },
    data() {
        return {

        }
    }
}
</script>

<style scoped>

    .expcard {
        margin-bottom: 24px;
        display: flex;
        flex-direction: column;
        align-self: stretch;

        margin-bottom: 24px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 0 12px;
        padding-bottom: 20px !important;
    }

    .expcard .card-image {
        height: 120px;
        width: 120px;
        line-height: 120px;
        margin: 24px auto;
        text-align: center;
        background: white;
    }

    .expcard .card-image img {
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
    }

    .expcard .card-content {
        order: -1;
        flex: 1 1 auto;
        padding-top: 20px;
        height: auto;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }

    .expcard .card-heading {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        margin-bottom: 12px;
        padding-top: 12px;
        width: 100%;
    }

    .expcard .card-title {
        flex: 1;
        font-weight: normal;
        font-size: 36px;
        color: rgba(0, 0, 0, 0.54);
        padding-left: 24px;
        padding-right: 12px;
        font-size: 24px;
        font-weight: bold;
        line-height: 1;
    }

    .expcard .card-title span.bar {
        opacity: 0.5;
    }

    .expcard .card-title small {
        font-size: 16px;
    }

    .expcard .card-date {
        text-align: right;
        font-size: 14px;
        letter-spacing: 1.34px;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.54);
        padding-right: 24px;
        padding-left: 12px;
        margin-left: 12px;
    }

    .expcard .card-details {
        display: initial;
    }

    .md-card-tabs .md-list-item {
        margin-left: 0px;
    }
    
    .md-ripple > span {
        width: initial;
        height: initial;
        overflow: initial;
        position: initial;
        left: initial;
        z-index: initial;
        white-space: normal;
    }

    @media screen and (min-width: 768px) {
        .expcard {
            padding: 0 56px;
            flex-direction: row;
        }
        .expcard .card-image {
            margin: 24px;
        }
        .expcard .card-title {
            font-size: 36px;
            font-weight: normal;
        }
        .expcard .card-content {
            width: 1px;
        }
    }

</style>