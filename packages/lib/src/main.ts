import phosphorVue from 'phosphor-vue';
import { App, Plugin } from 'vue';
import * as components from './components';
import './index.css';

const install: Exclude<Plugin['install'], undefined> = (app: App) => {
    app.use(phosphorVue);

    Object.entries(components).forEach(([name, component]) => {
        app.component(name, component);
    });
};

export * from './composables';

export default install;
