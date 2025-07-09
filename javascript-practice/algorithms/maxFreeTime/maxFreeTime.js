function maxFreeTime(eventTime, k, startTime, endTime) {
  const n = startTime.length;
  let res = 0;

  let meetings = [];
  for (let i = 0; i < n; i++) {
    meetings.push({ start: startTime[i], end: endTime[i] });
  }
  meetings.sort((a, b) => a.start - b.start);
  for (let i = 0; i < n; i++) {
    startTime[i] = meetings[i].start;
    endTime[i] = meetings[i].end;
  }

  const sum = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    sum[i + 1] = sum[i] + (endTime[i] - startTime[i]);
  }

  for (let i = k - 1; i < n; i++) {
    const right = i === n - 1 ? eventTime : startTime[i + 1];
    const left = i === k - 1 ? 0 : endTime[i - k];
    const meetingsDuration = sum[i + 1] - sum[i - k + 1];
    res = Math.max(res, right - left - meetingsDuration);
  }

  return res;
}

const eventTime = 24;
const k = 2;
const startTime = [2, 6, 10, 15];
const endTime = [4, 8, 12, 17];

console.log(maxFreeTime(eventTime, k, startTime, endTime));
