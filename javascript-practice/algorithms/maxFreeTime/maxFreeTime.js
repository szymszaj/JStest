function maxFreeTime(eventTime, k, startTime, endTime) {
  const n = startTime.length;
  let meetings = [];
  for (let i = 0; i < n; i++) {
    meetings.push({ start: startTime[i], end: endTime[i] });
  }
  meetings.sort((a, b) => a.start - b.start);

  meetings.unshift({ start: -Infinity, end: 0 });
  meetings.push({ start: eventTime, end: eventTime + Infinity });

  let maxGap = 0;

  for (let i = 1; i <= n - k + 1; i++) {
    const leftEnd = meetings[i - 1].end;
    const rightStart = meetings[i + k].start;
    const freeTime = rightStart - leftEnd;
    if (freeTime > maxGap) maxGap = freeTime;
  }
  return maxGap;
}
