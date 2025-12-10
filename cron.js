const cron = require('node-cron');
const axios = require('axios');

const BACKEND_URL = '';

const job = cron.schedule(
  '*/5 * * * *',
  async () => {
    try {
      await axios.get(BACKEND_URL);
      console.log('ping 보내기 성공');
    } catch (error) {
      console.error('ping 보내기 실패');
    }
  },
  {
    scheduled: false
  }
);

module.exports = { job };