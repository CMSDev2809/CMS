module.exports = {
  autoScroll: (amt = 125) => {
    window.scrollTo({ top: amt, behavior: "smooth" });
  }
};
