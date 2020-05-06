module.exports = num => {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + num);
  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  return `${newDate.getFullYear()}-${month < 10 ? `0${month}` : month}-${
    day < 10 ? `0${day}` : day
  }`;
};
