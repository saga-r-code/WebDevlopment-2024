let arr = [
  {
    pfp: "pfp/img-1.avif",
    story: "/story/photo-1.avif",
  },

  {
    pfp: "pfp/img-2.avif",
    story: "/story/photo-2.avif",
  },

  {
    pfp: "pfp/img-3.avif",
    story: "/story/photo-3.avif",
  },

  {
    pfp: "pfp/img-4.avif",
    story: "/story/photo-4.avif",
  },

  {
    pfp: "pfp/img-5.avif",
    story: "/story/photo-5.avif",
  },

  {
    pfp: "pfp/img-6.avif",
    story: "/story/photo-6.avif",
  },

  {
    pfp: "pfp/img-7.avif",
    story: "/story/photo-7.avif ",
  },
];

function stories() {
  let stories = document.querySelector(".stories");

  let add_image = "";
  arr.forEach(function (elem, index)
   {
    add_image += ` <div class="story">
    <img id="${index}" src="${elem.pfp}" alt="A story Image" />
  </div>`;
  });

  stories.innerHTML = add_image;
  stories.addEventListener("click", function (dets) 
  {
    // console.log(dets.target) // target is show the image //target is the element which is clicked
    document.querySelector(".screen").style.display = "block";
    document.querySelector(".screen").style.backgroundImage = 
    `url(${arr[dets.target.id].story })`;
    //this line show the story through target golden value coz we have given id to each image and show story

    setTimeout(function () {
      document.querySelector(".screen").style.display = "none";
    }, 3000);

    let falg = 0;
    if (falg == 0) 
    {
      document.querySelector(".screen").addEventListener("click", function () {
        document.querySelector(".screen").style.display = "none";
      });
    }
  });
}

stories();
