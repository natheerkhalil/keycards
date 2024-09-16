// CSS STYLES //
import './assets/css/styles.css'
import './assets/css/flex.css'
import './assets/css/reset.css'
import './assets/css/media.css'
import './assets/css/props.css'

// IMPORT VUE //
import { createApp } from 'vue/dist/vue.esm-bundler';

// IMPORT PINIA //
import { createPinia } from 'pinia'

// IMPORT APP //
import App from './App.vue'

// IMPORT ROUTER //
import router from './router'

// IMPORT AXIOS //
import axios from 'axios';

// IMPORT ENV VARIABLES //
import { API_URL } from '../config'
import { MAINTENANCE_MODE } from '../config'

// IMPORT COMPONENTS //
import Folder from './components/Folder/Folder.vue'

// CONFIGURE AXIOS //
axios.defaults.timeout = 999999;
axios.defaults.baseURL = API_URL;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

// IMPORT REQUEST //
import { request } from "@/utils/api";

// CREATE APP //
const app = createApp(App);

// USE PINIA //
app.use(createPinia());

// USE ROUTER //
app.use(router);

// USE COMPONENTS //
app.component('Folder', Folder);

// MOUNT APP //
app.mount('#app');

const exemptedRoutes = ["privacy", "terms"];
function checkMaintenanceMode() {
    const currentRouteName = router.currentRoute.value.name;

    if (MAINTENANCE_MODE === "true" || MAINTENANCE_MODE === "1" && !exemptedRoutes.includes(currentRouteName)) {
        router.push({ name: 'maintenance' });
    }
}

// Check maintenance mode every second
setInterval(checkMaintenanceMode, 1000);

export {
    request
};
