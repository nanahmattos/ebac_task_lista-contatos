export const insertMaskInPhone = (value: string | undefined) => {
  if (!value) return ''
  return value
}

//----METODO YOUTUBE
// export const insertMaskInPhone = (telefone: string) => {
//   const noMask = telefone.replace(/\D/g, '')
//   const { length } = noMask

//   if (lenght <= 11) {
//     return noMask
//       .replace(/(\d{2})(\d)/, '($1) $2')
//       .replace(lenght === 11 ? /(\d{2})(\d)/ : /(\d{2})(\d)/, '$1-$2')
//   }
//   return telefone
// }
