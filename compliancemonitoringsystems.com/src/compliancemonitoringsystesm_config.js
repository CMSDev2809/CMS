module.exports = {
  resetWindow: true,
  api:
    process.env.NODE_ENV === "production"
      ? "https://communitysupervision.org:5000"
      : "http://localhost:5000",
};
