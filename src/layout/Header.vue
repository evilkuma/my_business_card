<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
    :color-on-scroll="colorOnScroll"
    :class="extraNavClasses"
  >
  
    <div class="md-toolbar-row md-collapse-lateral">

      <div class="md-toolbar-section-start">
        <h3 class="md-title">{{ $ml.get('header').profile }}</h3>
      </div>

      <div class="md-toolbar-section-end">

        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          @click="toggleNavbarMobile()"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">

          <div class="md-collapse-wrapper">

            <mobile-menu nav-mobile-section-start="false">
              <!-- Here you can add your items from the section-start of your toolbar -->
            </mobile-menu>

            <md-list>

              <li class="md-list-item">

                <div class="md-list-item-content">

                  <drop-down direction="down" style="width: 100%">
                    <md-button
                      slot="title"
                      class="md-button md-button-link md-white md-simple dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <i class="material-icons">language</i>
                      <p>{{ $ml.get('header').language }}</p>
                    </md-button>
                    <ul class="dropdown-menu dropdown-with-icons">
                      <li
                        v-for="lang in $ml.list"
                        :key="lang"
                        @click="$ml.change(lang)"
                      >
                        <a href="#"><p v-text="lang"></p></a>
                      </li>
                    </ul>
                  </drop-down>

                </div>
                
              </li>

            </md-list>

          </div>

        </div>

      </div>

    </div>

  </md-toolbar>
</template>

<script>
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();
      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

import MobileMenu from "./MobileMenu.vue";

export default {
  components: {
    MobileMenu
  },
  props: {
    type: {
      type: String,
      default: "white",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info"
        ].includes(value);
      }
    },
    colorOnScroll: {
      type: Number,
      default: 0
    }
  },
  data() {
      return {
          toggledClass: false,
          extraNavClasses: ""
      }
  },
  methods: {
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");
      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);
        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {

      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();

    },
    handleScroll() {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      let navbarColor = document.getElementById("toolbar");
      this.currentScrollValue = scrollValue;
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `md-${this.type}`;
        navbarColor.classList.remove("md-transparent");
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = "";
          navbarColor.classList.add("md-transparent");
        }
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    },
    scrollToElement() {
      let element_id = document.getElementById("downloadSection");
      if (element_id) {
        element_id.scrollIntoView({ block: "end", behavior: "smooth" });
      }
    }
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  }
}
</script>

<style scoped>
    p {
      margin: 0;
    }
</style>
