var path = "/images/blogs/";

module.exports = {
  id: 1,
  title: "My first ever blog",
  image: path + "first.png",
  heightDesktop: "290",
  heightMobile: "550",
  date: new Date(2016, 9, 2),
  content: "<p>This is my first every blog, just to test the blogs stuff on my website. After many long hours I have managed to change the sctructure of my website to keep all imporant data files separate on the backend. This involved creating started route on the backend to be able to fetch what are essentially javascript objects and send them back to the frontend. On the frontend side, I have just changed the services so they make http requests to the backend for data. I am not also running my website through <a href='https://www.cloudflare.com/' target='_blank'>CloudFlare</a>, so hopefully images will start loading fast. </p><p>All of this is completely scalable, as I can just upgrade my memberships to the various services I am using to host. I'm going to provide a full explanation of the design and implementation of the website on the projects page later. Also, I'm going to make the blogs sections nicer by making it possible to write straight HTML code here, and have it all nice and formatted on the other side. Also, with this structure I can hopefully add images and apps directly into the content. Right, careless whisper came on, I think thats my cue to finish for the day.</p>"
}