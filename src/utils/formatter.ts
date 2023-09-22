export const dateFormatter = new Intl.DateTimeFormat('pt-BB')

export const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})
