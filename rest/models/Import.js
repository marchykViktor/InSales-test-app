const importSpecOptions = {
  type: 'Товар',
  target: 'other',
  data: [
    {
      name: 'Категория',
      id: 'category_id',
      permalink: 'product-other-category_id',
      type: 'product'
    }, {
      name: 'Цена продажи',
      id: 'price',
      permalink: 'variant-other-price',
      type: 'variant'
    }, {
      name: 'Старая цена',
      id: 'old_price',
      permalink: 'variant-other-old_price',
      type: 'variant'
    }, {
      name: 'Цена закупки',
      id: 'base_price',
      permalink: 'variant-other-base_price',
      type: 'variant'
    }, {
      name: 'Остаток',
      id: 'quantity',
      permalink: 'variant-other-quantity',
      type: 'variant'
    }, {
      name: 'Вес',
      id: 'weight',
      permalink: 'variant-other-weight',
      type: 'variant'
    }, {
      name: 'Артикул',
      id: 'sku',
      permalink: 'variant-other-sku',
      type: 'variant'
    }, {
      name: 'Штрих-код',
      id: 'barcode',
      permalink: 'variant-other-barcode',
      type: 'variant'
    }, {
      name: 'Краткое описание',
      id: 'short_description',
      permalink: 'product-other-short_description',
      type: 'product'
    }, {
      name: 'Полное описание',
      id: 'description',
      permalink: 'product-other-description',
      type: 'product'
    }, {
      name: 'Изображение',
      id: 'image',
      permalink: 'product-other-image',
      type: 'product'
    }, {
      name: 'Мета-тег title',
      id: 'title',
      permalink: 'product-other-title',
      type: 'product'
    }, {
      name: 'Мета-тег keywords',
      id: 'meta_keywords',
      permalink: 'product-other-meta_keywords',
      type: 'product'
    }, {
      name: 'Мета-тег description',
      id: 'meta_description',
      permalink: 'product-other-meta_description',
      type: 'product'
    }, {
      name: 'Название товара в URL',
      id: 'permalink',
      permalink: 'product-other-permalink',
      type: 'product'
    }, {
      name: 'Весовой коефициент',
      id: 'sort_weight',
      permalink: 'product-other-sort_weight',
      type: 'product'
    }, {
      name: 'Единица измерения',
      id: 'currency_code',
      permalink: 'product-other-currency_code',
      type: 'product'
    }, {
      name: 'НДС',
      id: 'vat',
      permalink: 'product-other-vat',
      type: 'product'
    }, {
      name: 'Габариты',
      id: 'dimensions',
      permalink: 'product-other-dimensions',
      type: 'product'
    }
  ] 
};

module.exports = importSpecOptions;