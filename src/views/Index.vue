<template>
  <div class="wrapper">
    
    <parallax 
      class="section page-header header-filter" 
      :style="{ backgroundImage: `url(${ $ml.get('parallax').image })` }"
    ></parallax>

    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="profile">
                <div class="avatar">
                  <img
                    :src="$ml.get('main').image"
                    class="img-raised rounded-circle img-fluid"
                  />
                </div>
                <div class="name">
                  <h3 class="title">{{ $ml.get('main').name }}</h3>
                  <h6>{{ $ml.get('main').prof }}</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="description text-center">
            <p>
              {{ $ml.get('main').description }}
            </p>
          </div>
          <div class="profile-tabs">

            <tabs 
              plain
              nav-pills-icons
              color-button="success"
              :tab-name="$ml.get('tabs').map(el => el.name)" 
              :tab-icon="$ml.get('tabs').map(el => el.icon)"
            >

              <template v-for="(val, key) in $ml.get('tabs')" :slot="'tab-pane-'+(key+1)">
                <div class="md-layout" :key="'t'+key">
                  <div class="md-layout-item">

                    <template v-if="val.data && val.data.components">

                      <component 
                        v-for="(cval, ckey) in val.data.components" 
                        :key="'c'+ckey"
                        :is="cval.tag"
                        v-bind="cval.props"
                      ></component>

                    </template>

                    <template v-else> Is default text </template>

                  </div>
                </div>
              </template>
            
            </tabs>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import Tabs from './../components/Tabs.vue'
import ExpCard from './../components/ExperienceCard.vue'
import NavTabsCard from './../components/NavTabsCard.vue'

export default {
  components: {
    Tabs, ExpCard, NavTabsCard
  },
  data() {
    return {
      bg,
      avatar
    }
  }
}

</script>

<style scoped>

  .profile-page .page-header {
    height: 380px;
    background-position: 50%;
  }
  
  .section {
    padding: 0;
  }

</style>