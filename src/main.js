import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import './assets/main.css'
import './assets/custom.css'


import { createApp } from 'vue'
import { createWebHashHistory, createRouter } from 'vue-router'

import App from './App.vue'
import HomePage from './components/HomePage.vue'
import TutorialPage from './tutorial/TutorialPage.vue'
import CounterPage from './tutorial/CounterPage.vue'
import TemplateSyntax from './tutorial/essentials/TemplateSyntax.vue'
import ReactivityFundamentals from './tutorial/essentials/ReactivityFundamentals.vue'
import ComputedProperties from './tutorial/essentials/ComputedProperties.vue'
import ClassStyleBindings from './tutorial/essentials/ClassStyleBindings.vue'
import ConditionalRendering from './tutorial/essentials/ConditionalRendering.vue'
import ListRendering from './tutorial/essentials/ListRendering.vue'
import EventHandling from './tutorial/essentials/EventHandling.vue'
import FormInputBindings from './tutorial/essentials/FormInputBindings.vue'
import WatchersVue from './tutorial/essentials/WatchersVue.vue'
import TemplateRefs from './tutorial/essentials/TemplateRefs.vue'
import TransitionVue from './tutorial/built-in_components/TransitionVue.vue'
import TransitionGroups from './tutorial/built-in_components/TransitionGroups.vue'
import TeleportVue from './tutorial/built-in_components/TeleportVue.vue'

import SectionContainer from './tutorial/reusables/SectionContainer.vue'


const routes = [
  { path: '/', component: HomePage },
  {
    path: '/tutorial',
    component: TutorialPage,
    children: [
      { path: '/counter', component: CounterPage },
      { path: '/template-syntax', component: TemplateSyntax },
      { path: '/reactivity-fundamentals', component: ReactivityFundamentals },
      { path: '/computed-properties', component: ComputedProperties },
      { path: '/class-style-bindings', component: ClassStyleBindings },
      { path: '/conditional-rendering', component: ConditionalRendering },
      { path: '/list-rendering', component: ListRendering },
      { path: '/event-handling', component: EventHandling },
      { path: '/form-input-bindings', component: FormInputBindings },
      { path: '/watchers', component: WatchersVue },
      { path: '/template-refs', component: TemplateRefs },
      { path: '/transition', component: TransitionVue },
      { path: '/transition-groups', component: TransitionGroups },
      { path: '/teleport', component: TeleportVue },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(), // Display the URL in the address bar
  routes,
  linkExactActiveClass: 'bg-success rounded text-white',
})

createApp(App)
  .component('SectionContainer', SectionContainer) // Register the component globally
  .use(router)
  .mount('#app')
