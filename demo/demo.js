import Accordion from '../src'

base.features.add('accordion', Accordion)
base.features.add('accordion-single', Accordion, { multipleItemsOpen: false })

base.features.init()
