import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 500 }, // เพิ่มจำนวนผู้ใช้เป็น 500 คนในเวลา 10 วินาที
    { duration: '3m', target: 500 }, // คงจำนวนผู้ใช้ที่ 500 คนในเวลา 3 นาที
    { duration: '10s', target: 0 },  // ลดจำนวนผู้ใช้ลงเป็น 0 คนในเวลา 10 วินาที
  ],
  insecureSkipTLSVerify: true, 
};

export default function () {
  http.get('https://45.136.236.146/us/store'); 
  sleep(1);
}
