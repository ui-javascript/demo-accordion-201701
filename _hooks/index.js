import Vue from 'vue'

import VueCompositionApi, {computed, reactive, ref} from '@vue/composition-api';
import {useDateNow, usePagination} from "vue-composable";

Vue.use(VueCompositionApi);

import vueAccordion from './vue-accordion.vue'
import vueWaterfallEasy from 'vue-waterfall-easy'

Vue.component('vue-accordion', vueAccordion)
Vue.component('vue-waterfall-easy', vueWaterfallEasy)

// Why don't you export default?
// https://github.com/webpack/webpack/issues/3560

const App = {
  template: `
    <div>


    <vue-accordion :items="items" :styles="styles"></vue-accordion>

    
    </div>

  `,
  computed: {
    styles() {
      return {
        div: {
          height: this.div.height + 'px',
          margin: this.div.center ? '0 auto' : '0',
        },
        li: {
          borderColor: '#FFF',
          borderStyle: 'solid',
          borderWidth: this.panel.border + 'px',
          padding: this.panel.padding + 'px',
        },
        h2: {
          fontSize: this.titles.font + 'px',
          color: this.titles.color
        },
        p: {
          fontSize: this.texts.font + 'px',
          marginTop: this.texts.margin + 'px'
        }
      }
    },
  },
  data() {
    return {

      div: {
        height: 200,
        center: true,
      },
      panel: {
        border: 0,
        padding: 0
      },
      texts: {
        font: 10,
        margin: 0
      },
      titles: {
        font: 15,
        color: 'white'
      },
      items: [
        {
          title: 'First',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ',
          url: '#',
          image: 'https://luo0412.oss-cn-hangzhou.aliyuncs.com/20210719133405.png',
          imgs: [
            {
              "src": "https://lfyfly.github.io/vue-waterfall-easy/demo/static/img/1.jpg",
              "href": "https://www.baidu.com",
              "info": "一些图片描述文字"
            },
            {
              "src": "https://lfyfly.github.io/vue-waterfall-easy/demo/static/img/1.jpg",
              "href": "https://www.baidu.com",
              "info": "一些图片描述文字"
            },
            {
              "src": "https://lfyfly.github.io/vue-waterfall-easy/demo/static/img/1.jpg",
              "href": "https://www.baidu.com",
              "info": "一些图片描述文字"
            },
            {
              "src": "https://lfyfly.github.io/vue-waterfall-easy/demo/static/img/1.jpg",
              "href": "https://www.baidu.com",
              "info": "一些图片描述文字"
            }
          ],
        },
        {
          title: 'Second',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ',
          url: '#',
          image: 'https://luo0412.oss-cn-hangzhou.aliyuncs.com/20210719133405.png',
          imgs: [
            {
              "src": "https://lfyfly.github.io/vue-waterfall-easy/demo/static/img/1.jpg",
              "href": "https://www.baidu.com",
              "info": "一些图片描述文字"
            },
            {
              "src": "https://lfyfly.github.io/vue-waterfall-easy/demo/static/img/1.jpg",
              "href": "https://www.baidu.com",
              "info": "一些图片描述文字"
            }
          ],
        },
        {
          title: 'Third',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ',
          url: '#',
          image: 'https://luo0412.oss-cn-hangzhou.aliyuncs.com/20210719133405.png'
        },
        {
          title: 'Fourth',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ',
          url: '#',
          image: 'https://luo0412.oss-cn-hangzhou.aliyuncs.com/20210719133405.png'
        },
        {
          title: 'Fifth',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ',
          url: '#',
          image: 'https://luo0412.oss-cn-hangzhou.aliyuncs.com/20210719133405.png'
        },
        {
          title: 'Sixth',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ',
          url: '#',
          image: 'https://luo0412.oss-cn-hangzhou.aliyuncs.com/20210719133405.png'
        },
        {
          title: 'Seventh',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ',
          url: '#',
          image: 'https://luo0412.oss-cn-hangzhou.aliyuncs.com/20210719133405.png'
        }
      ]
    }
  },

}

Vue.config.productionTip = false


new Vue({
  el: '#app',
  render: h => h(App)
})
