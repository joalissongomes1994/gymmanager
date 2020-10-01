module.exports = {
  age(timestamp) {
    const today = new Date();
    const birthDate = new Date(timestamp);

    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month == 0 && today.getDate() < birthDate.getDate())) {
      age -= 1;
    }

    return age;
  },

  date(timestamp) {
    const date = new Date(timestamp);

    const day = `0${date.getUTCDate()}`.slice(-2);
    const month = `0${date.getUTCMonth() + 1}`.slice(-2);
    const year = date.getUTCFullYear();

    return {
      birthDay: `${day}/${month}`,
      iso: `${year}-${month}-${day}`,
      format: `${day}/${month}/${year}`,
    };
  },
};
