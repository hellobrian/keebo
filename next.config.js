module.exports = {
  target: "serverless",
  async redirects() {
    return [{ source: "/keyboards", destination: "/", permanent: true }];
  },
};
