function createCounter(initialVaule = 0, step = 1) {
  let count = initialVaule;

  return function () {
    count += step;
    return count;
  };
}

const counter = createCounter(10, 2);
console.log(counter());
console.log(counter());

const calculateStals = (...numbers) => {
  if (numbers.lenght === 0) return { sum: 0, avg: 0, max: 0, min: null };

  const sum = numbers.reduce((total, num) => total + num, 0);
  return {
    sum,
    avg: sum / numbers.length,
    max: Math.max(...numbers),
  };
};
console.log(calculateStals(23, 14, 37, 18, 92));

const fetchUserData = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId < 100) {
        resolve({ id: userId, name: `User ${userId}` });
      } else {
        reject(new Error("User not found"));
      }
    }, 500);
  });
};

const fetchUserPosts = (user) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: user.name,
        posts: [`Post 1 by ${user.name}`, `Post 2 by ${user.name}`],
      });
    }, 500);
  });
};

async function getUserActivity(userId) {
  try {
    const user = await fetchUserData(userId);
    const posts = await fetchUserPosts(user);
    return {
      ...user,
      activity: {
        postCount: posts.posts.length,
        lastActive: new Date().toISOString(),
      },
      posts: posts.posts,
    };
  } catch (error) {
    console.error("Error fetching user activity:", error);
    return { error: error.message };
  }
}
getUserActivity(42)
  .then((result) => console.log("User activity:", result))
  .catch((error) => console.error("Error:", error));
