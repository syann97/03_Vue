// import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';
import { faTv } from '@fortawesome/free-solid-svg-icons/faTv';
import { faGem } from '@fortawesome/free-solid-svg-icons/faGem';
import { faUserTie } from '@fortawesome/free-solid-svg-icons/faUserTie';
import { faPersonDress } from '@fortawesome/free-solid-svg-icons/faPersonDress';

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(
  faUserSecret,
  faHouse,
  faTv,
  faGem,
  faPersonDress,
  faUserTie,
  faPersonDress
);

const app = createApp(App);

app.use(router);

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app');
