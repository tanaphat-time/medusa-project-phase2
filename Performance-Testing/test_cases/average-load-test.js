import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 100 }, // เพิ่มจำนวนผู้ใช้เป็น 100 คนในเวลา 10 วินาที
    { duration: '1m', target: 100 }, // คงจำนวนผู้ใช้ที่ 100 คนในเวลา 1 นาที
    { duration: '10s', target: 0 },  // ลดจำนวนผู้ใช้ลงเป็น 0 คนในเวลา 10 วินาที
  ],
  insecureSkipTLSVerify: true, 
};

export default function () {
  http.get('https://45.136.236.146/us'); 
  sleep(1);
}
