import { mount } from 'svelte'
import App from 'src/App.svelte'

import 'src/styles/reset.less';
import 'src/styles/fonts.less';

const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app
