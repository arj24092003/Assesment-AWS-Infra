import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 },
    { duration: '1m', target: 20 },
    { duration: '30s', target: 0 },
  ],
};

export default function () {
  const res = http.get('http://13.235.19.233');

  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 500 ms': (r) => r.timings.duration < 500,
  });

  sleep(1);
}
