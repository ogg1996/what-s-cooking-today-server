import cron from 'node-cron';
import axios from 'axios';

const BACKEND_URL = '';

export const job = cron.schedule(
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
