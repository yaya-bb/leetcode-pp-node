const startTime = new Date();

startTime.setMonth(4);
startTime.setDate(10);
startTime.setHours(0);
startTime.setMinutes(0);
startTime.setSeconds(0);

module.exports = {
  startTime: startTime.getTime(),
  secret: process.env.secret,
  clientId: "c16b80e7b58a5a007157",
  db: [
    {
      login: "azl397985856123",
    },
    {
      login: "Yueqi-19",
    },
  ],
};
