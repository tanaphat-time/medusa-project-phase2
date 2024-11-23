import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 1000 }, // เพิ่มโหลดเป็น 1000 คนใน 10 วินาที
    { duration: '30s', target: 0 },   // ลดทันที
  ],
  insecureSkipTLSVerify: true, 
};

export default function () {
  http.get('https://45.136.236.146/us/cart'); 
  sleep(1);
}
