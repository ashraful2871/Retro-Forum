const loadAllData = async (category) => {
  //   console.log(
  //     `https://openapi.programming-hero.com/api/retro-forum/posts${
  //       category ? `?category=${category}` : ``
  //     }`
  //   );
  //   if (category) {
  //     console.log(
  //       ` https://openapi.programming-hero.com/api/retro-forum/posts?category=${category}`
  //     );
  //   } else {
  //     console.log(`https://openapi.programming-hero.com/api/retro-forum/posts`);
  //   }
  document.getElementById("post-container").innerHTML = "";
  const res = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts${
      category ? `?category=${category}` : ``
    }`
  );
  const data = await res.json();
  displayAllPost(data.posts);
};

const displayAllPost = (posts) => {
  const postContainerEl = document.getElementById("post-container");
  posts.forEach((post) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card card-side bg-[#F3F3F5] p-8">
            <div class=" rounded-full w-[72px] h-[72px] ">
              <img class="w-full h-full rounded-full" src=${post.image} alt="Profile" />
            </div>
            <div class="card-body  ml-6  p-0">
              <div class="flex gap-5 ">
                <div>
                  <h2 class="font-medium text-sm mb-3"># ${post.category}</h2>
                </div>
                <div>
                  <h2 class="font-medium text-sm mb-4">Author: ${post.author.name}</h2>
                </div>
              </div>
              <h3 class="font-bold text-xl ">
                ${post.title}</h3>
              <p class="font-normal text-base mb-11">${post.description}</p>
              <div class="card-actions justify-between ">
                <div class="flex justify-between gap-5">
                  <div class="flex items-center">
                    <i class="fa-regular fa-message text-2xl"></i> <span class="ml-3 font-normal text-lg">${post.comment_count}</span>
                  </div>
                  <div class="flex items-center">
                    <i class="fa-regular fa-eye text-2xl"></i> <span class="ml-3 font-normal text-lg">${post.view_count}</span>
                  </div>
                  <div class="flex items-center">
                    <i class="fa-regular fa-clock text-2xl"></i> <span class="ml-3 font-normal text-lg">${post.posted_time} min</span>
                  </div>
                </div>
                <div>
                  <button onclick="markAsRead('${post.description}','${post.view_count}')" class="btn btn-primary">Watch</button>
                </div>
              </div>
            </div>
          </div>
    
    `;
    postContainerEl.append(div);
  });
};

const markAsRead = (description, view_count) => {
  const markAsReadContainerEl = document.getElementById("markAsReadContainer");
  const div = document.createElement("div");
  div.innerHTML = `
  <div class="flex justify-between p-2 lg:p-3bg-white rounded-2xl items-center gap-3">
    <div class="lg:w-4/5 w-11/12">
      <p> Rock out to the greatest hits of all time with this epic playlist! 3125 ${description} </p>
    </div>
    <div class="lg:w-1/5 w-4/12 flex justify-end">
      <p><i class="fa-regular fa-eye"></i> ${view_count}</p>
    </div>
  </div>
  `;
  markAsReadContainerEl.append(div);

  clickHandler();
};

const clickHandler = () => {
  const markAsReadCounterEl =
    document.getElementById("markAsReadCounter").innerText;
  const currentValue = parseInt(markAsReadCounterEl);
  const sum = currentValue + 1;

  document.getElementById("markAsReadCounter").innerText = sum;
};

loadAllData();

const handleSearchByCategory = () => {
  const searchText = document.getElementById("search-posts").value;
  document.getElementById("search-posts").value = "";
  loadAllData(searchText);
  //   console.log(searchText);
};
