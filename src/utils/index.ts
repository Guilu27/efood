export const PriceFormatter = (preco = 0) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const getTotalPrice = (items: MenuItem[]) => {
  return items.reduce((sum, currentItem) => {
    if (currentItem) {
      return (sum += currentItem.preco)
    }
    return 0
  }, 0)
}
