const numberFormater = (num: number): string => {
  return num
    .toString()
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};

export default numberFormater;
