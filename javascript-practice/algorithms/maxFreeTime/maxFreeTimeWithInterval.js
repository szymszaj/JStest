function maxFreeTimeWithInterval(eventTime, k, startTime, endTime) {
  if (startTime.length !== endTime.length)
    throw new Error("startTime and endTime arrays must have the same length.");
  const n = startTime.length;
  if (n === 0 || k >= n)
    return { maxFreeTime: eventTime, freeInterval: [0, eventTime] };

  let meetings = [];
  for (let i = 0; i < n; i++) {
    meetings.push({ start: startTime[i], end: endTime[i] });
  }
  meetings.sort((a, b) => a.start - b.start);

  let merged = [];
  for (const m of meetings) {
    if (merged.length === 0 || merged[merged.length - 1].end < m.start) {
      merged.push({ ...m });
    } else {
      merged[merged.length - 1].end = Math.max(
        merged[merged.length - 1].end,
        m.end
      );
    }
  }
  startTime = merged.map((m) => m.start);
  endTime = merged.map((m) => m.end);
  const mLen = merged.length;

  const sum = new Array(mLen + 1).fill(0);
  for (let i = 0; i < mLen; i++) {
    sum[i + 1] = sum[i] + (endTime[i] - startTime[i]);
  }

  let res = 0,
    resRange = [0, eventTime];
  for (let i = k - 1; i < mLen; i++) {
    const right = i === mLen - 1 ? eventTime : startTime[i + 1];
    const left = i === k - 1 ? 0 : endTime[i - k];
    const meetingsDuration = sum[i + 1] - sum[i - k + 1];
    const free = right - left - meetingsDuration;
    if (free > res) {
      res = free;
      resRange = [left, right];
    }
  }

  return { maxFreeTime: res, freeInterval: resRange };
}

const eventTime = 24;
const k = 2;
const startTime = [2, 6, 10, 15];
const endTime = [4, 8, 12, 17];

console.log(maxFreeTimeWithInterval(eventTime, k, startTime, endTime));
