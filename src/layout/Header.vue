<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
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

            <md-list>

              <li class="md-list-item">

                <div class="md-list-item-content">

                  <drop-down direction="down">
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
export default {
    data() {
        return {
            toggledClass: false
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

        // this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
        this.toggledClass = !this.toggledClass;
        this.bodyClick();

        }
    }
}
</script>

<style scoped>
    p {
      margin: 0;
    }
</style>
