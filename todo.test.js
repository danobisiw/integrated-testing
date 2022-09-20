const {fetchData} = require("./fetchData");


describe("Testing Post", () => {
  it("should return 100 posts", async () => {
    const posts = await fetchData("posts");
    expect(posts.length).toBe(100);
  });

  it("should contain post with ID of 96", async ()=>{
    const posts= await fetchData("posts");
    expect(posts).toContainEqual({
      "userId": 10,
"id": 96,
"title": "quaerat velit veniam amet cupiditate aut numquam ut sequi",
"body": "in non odio excepturi sint eum\nlabore voluptates vitae quia qui et\ninventore itaque rerum\nveniam non exercitationem delectus aut"
})
  })
})
