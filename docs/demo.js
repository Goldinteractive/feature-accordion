import Accordion from '../src'

import { Scroller } from 'gi-js-base/src/utils/dom'

var scroller = new Scroller({
  offsetY: 20
})

base.features.add('accordion', Accordion, {
  scroller: scroller
})

base.features.init()
