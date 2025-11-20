const ACTIVITY_MULTIPLIERS = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  very_active: 1.9,
};

const GOAL_ADJUST = {
  lose: -500,
  maintain: 0,
  gain: 500,
};

function toNumberOrNull(v) {
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

function calculateBMR({ sex, age, weight, height }) {
  if (sex === "m" || sex === "M") {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  }
  return 10 * weight + 6.25 * height - 5 * age - 161;
}

function computeResults({
  sex,
  age,
  weight,
  height,
  activity,
  goal = "maintain",
}) {
  const bmr = calculateBMR({ sex, age, weight, height });
  const multiplier = ACTIVITY_MULTIPLIERS[activity];
  const tdee = bmr * multiplier;
  const adjusted = tdee + (GOAL_ADJUST[goal] || 0);
  return { bmr, multiplier, tdee, adjusted };
}

module.exports = {
  ACTIVITY_MULTIPLIERS,
  GOAL_ADJUST,
  toNumberOrNull,
  calculateBMR,
  computeResults,
};
