const ATTR_OPEN = 'data-open'

/**
 * Accordion feature class.
 */
class Accordion extends base.features.Feature {

  init() {
    var $toggles = this.$$(`.${this.options.itemClass} > .${this.options.itemToggleClass}`)
    this.addEventListener($toggles, 'click', this._clickListener())
    this.addEventListener(window, 'resize', this._resizeListener())

    window.setTimeout(() => {
      this._openByStates()
    }, this.options.initialStatesOpeningDelay)
  }

  isItemOpen($item) {
    return $item.classList.contains(this.options.openItemClass)
  }

  toggleItem($item) {
    if (this.isItemOpen($item)) {
      this.closeItem($item)
    } else {
      this.openItem($item)
    }
  }

  openItem($item) {
    $item.classList.add(this.options.openItemClass)
    this._updateContentHeight($item)

    if (!this.options.multipleItemsOpen) {
      this._getOpenItems().forEach(($openItem) => {
        if ($openItem !== $item) this.closeItem($openItem)
      })
    }

    this.trigger('opened', $item)
  }

  closeItem($item) {
    $item.classList.remove(this.options.openItemClass)
    this._updateContentHeight($item)
    this.trigger('closed', $item)
  }

  _getOpenItems() {
    var $openItems = [...this.$$(`.${this.options.itemClass}.${this.options.openItemClass}`)]
    return $openItems
  }

  _openByStates() {
    var $items = [...this.$$(`.${this.options.itemClass}:not(${this.options.openItemClass})[${ATTR_OPEN}]`)]

    $items.forEach(($item) => {
      this.openItem($item)
    })
  }

  _updateAllOpenContentHeights() {
    this._getOpenItems().forEach(($openItem) => {
      this._updateContentHeight($openItem)
    })

    // reset the updating property so we can
    // capture the next resize event
    this._updatingContentHeights = false
  }

  _updateContentHeight($item) {
    var height = 0
    var $content = $item.querySelector(`.${this.options.itemContentClass}`)
    var $inner = $content.querySelector(`.${this.options.itemContentInnerClass}`)

    if ($item.classList.contains(this.options.openItemClass)) {
      height = $inner.offsetHeight
    }

    $content.style.height = height +'px'
  }

  _resizeListener() {
    return (e) => {
      if (!this._updatingContentHeights) {
        this._updatingContentHeights = true
        base.utils.fn.rAF(this._updateAllOpenContentHeights.bind(this))
      }
    }
  }

  _clickListener() {
    return (e) => {
      if (e.target.nodeName.toLowerCase() !== 'a') {
        e.preventDefault()
        this.toggleItem(e.currentTarget.closest(`.${this.options.itemClass}`))
      }
    }
  }

}

Accordion.defaultOptions = {
  multipleItemsOpen: true,
  initialStatesOpeningDelay: 150,
  itemClass: 'item',
  itemToggleClass: 'header',
  itemContentClass: 'content',
  itemContentInnerClass: 'inner',
  openItemClass: '-open'
}

export default Accordion
