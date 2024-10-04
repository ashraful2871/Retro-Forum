// no 1
const loadAllData = async (category) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts${
      category ? `?category=${category}` : ``
    }`
  );
  const data = await res.json();
  displayAllPost(data.posts);
};
// 2. displayAllPost() ..... and latestPost()

//append() and appendChild() different

// sort
