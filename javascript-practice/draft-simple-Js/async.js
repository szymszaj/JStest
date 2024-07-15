const API = "https://api.example.com";
const fetchData = async () => {
  try {
    const result = await fetch(`${API}/data`);
    const data = await result.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
