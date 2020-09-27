function formatDate(date) {
  const formatedDate = new Date(date).toLocaleDateString('pt-br');
  return formatedDate;
}

export default formatDate;
