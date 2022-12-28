import type { PluginOption } from 'vite'
import Unocss from 'unocss/vite'
import { presetIcons, presetUno, presetAttributify } from 'unocss'
import { safelist } from '@svelte-press/remark-live-code'
import CorePlugin from './plugin.js'
import { sveltekit } from '@sveltejs/kit/vite'

const unoPlugins = Unocss({
  presets: [
    presetAttributify(),
    presetUno(),
    presetIcons(),
  ],
  safelist
})

const VitePlugSveltepress: () => PluginOption = () => {

  return [
    unoPlugins, 
    CorePlugin(),
    sveltekit()
  ]
}

export default VitePlugSveltepress
