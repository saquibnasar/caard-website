import getDocument, { showPrevPage, showNextPage } from "./document.js";
import getSlider from "./slider.js";

const getIcon = (iconName) => {
  switch (iconName) {
    case "Instagram":
      return "assets/social_icon/instagram.svg";
    case "Youtube":
      return "assets/social_icon/youtube.svg";
    case "Facebook":
      return "assets/social_icon/facebook.svg";
    case "Linkedin":
      return "assets/social_icon/linkedin.svg";
    case "Pinterest":
      return "assets/social_icon/pinterest.svg";
    case "Snapchat":
      return "assets/social_icon/snapchat.svg";
    case "Clubhouse":
      return "assets/social_icon/clubhouse.svg";
    case "Twitch":
      return "assets/social_icon/twitch.svg";
    case "Twitter":
      return "assets/social_icon/twitter.svg";
    case "Tiktok":
      return "assets/social_icon/tiktok.svg";
    case "Messages":
      return "assets/social_icon/message.svg";
    case "Phone":
      return "assets/social_icon/phone.svg";
    case "Whatsapp":
      return "assets/social_icon/whatsapp.svg";
    case "Whatsapp Group":
      return "assets/social_icon/whatsapp.svg";
    case "Contacts":
      return "assets/social_icon/contacts.svg";
    case "Facetime":
      return "assets/social_icon/facetime.svg";
    case "Telegram":
      return "assets/social_icon/telegram.svg";
    case "Wechat":
      return "assets/social_icon/wechat.svg";
    case "Googlemaps":
      return "assets/social_icon/google_maps.svg";
    case "Gmail":
      return "assets/social_icon/gmail.svg";
    case "Outlook":
      return "assets/social_icon/outlook.svg";
    case "Email":
      return "assets/social_icon/email.svg";
    case "Skype":
      return "assets/social_icon/skype.svg";
    case "Signal":
      return "assets/social_icon/signal.svg";
    case "Discord":
      return "assets/social_icon/discord.svg";
    case "Website":
      return "assets/social_icon/website.svg";
    case "Googlereview":
      return "assets/social_icon/google_review.svg";
    case "Calendly":
      return "assets/social_icon/calendly.svg";
    case "Appstore":
      return "assets/social_icon/appstore.svg";
    case "Googleplay":
      return "assets/social_icon/googleplay.svg";
    case "Booksy":
      return "assets/social_icon/booksy.svg";
    case "Yelp":
      return "assets/social_icon/yelp.svg";
    case "Square":
      return "assets/social_icon/square.svg";
    case "Etsy":
      return "assets/social_icon/etsy.svg";
    case "Indiamart":
      return "assets/social_icon/indiamart.svg";
    case "Justdial":
      return "assets/social_icon/justdial.svg";
    case "Zomato":
      return "assets/social_icon/zomato.svg";
    case "Swiggy":
      return "assets/social_icon/swiggy.svg";
    case "Doordash":
      return "assets/social_icon/doordash.svg";
    case "Airbnb":
      return "assets/social_icon/airbnb.svg";
    case "Shopify":
      return "assets/social_icon/shopify.svg";
    case "Paypal":
      return "assets/social_icon/paypal.svg";
    case "Paytm":
      return "assets/social_icon/paytm.svg";
    case "Cashapp":
      return "assets/social_icon/cashapp.svg";
    case "Viemo":
      return "assets/social_icon/vimeo.svg";
    case "Metamask":
      return "assets/social_icon/metamask.svg";
    case "Buymeacoffee":
      return "assets/social_icon/buymeacoffee.svg";
    case "Medium":
      return "assets/social_icon/medium.svg";
    case "Github":
      return "assets/social_icon/gitHub.svg";
    case "Reddit":
      return "assets/social_icon/reddit.svg";
    case "Stackoverflow":
      return "assets/social_icon/stackoverflow.svg";
    case "Quora":
      return "assets/social_icon/quora.svg";
    case "Kaggle":
      return "assets/social_icon/kaggle.svg";
    case "Blogspot":
      return "assets/social_icon/blogspot.svg";
    case "Behance":
      return "assets/social_icon/behance.svg";
    case "Dribbble":
      return "assets/social_icon/dribbble.svg";
    case "Freelancer":
      return "assets/social_icon/freelancer.svg";
    case "Tumblr":
      return "assets/social_icon/tumblr.svg";
    case "Opensea":
      return "assets/social_icon/opensea.svg";
    case "Bumble":
      return "assets/social_icon/bumble.svg";
    case "Tinder":
      return "assets/social_icon/tinder.svg";
    case "Spotify":
      return "assets/social_icon/spotify.svg";
    case "Soundcloud":
      return "assets/social_icon/soundcloud.svg";
    case "Applemusic":
      return "assets/social_icon/applemusic.svg";
    case "Youtubemusic":
      return "assets/social_icon/youtube_music.svg";
    case "Slider":
      return "assets/social_icon/soundcloud.svg";
    case "FeaturedVideo":
      return "assets/social_icon/soundcloud.svg";
    default:
  }
};

const showUserDetails = (type, vlaue, detailPlace, attribute) => {
  const detailPlaceHolder = document.querySelector(detailPlace);

  if (type == "text") {
    detailPlaceHolder.textContent = vlaue;
  }

  detailPlaceHolder.setAttribute(attribute, vlaue);
};

const createElement = (tagName, className, textContent, attribute) => {
  const element = document.createElement(tagName);
  element.setAttribute("class", className);

  if (textContent && textContent.trim()) {
    element.textContent = textContent;
  }
  if (attribute) {
    for (const key of Object.keys(attribute)) {
      element.setAttribute(key, attribute[key]);
    }
  }

  return element;
};

let data;
const root = document.getElementById("root");
const loader = document.getElementById("loader");

async function getData() {
  root.style.height = "100vh";
  loader.classList.add("d-flex");
  let response = await fetch(
    "https://7drkndiu7g.execute-api.ap-south-1.amazonaws.com/v1/previewprofile/saquib"
  );

  data = await response.json();

  loadAllDetails();
}

function loadAllDetails() {
  showUserDetails("text", data["PersonalInfo"]["Name"], ".hero-bottom h1");
  showUserDetails("text", data["PersonalInfo"]["Location"], ".hero-bottom h2");
  showUserDetails("text", data["PersonalInfo"]["Country"], ".hero-bottom h3");
  showUserDetails("text", data["PersonalInfo"]["Bio"], ".hero-detail p");
  const cardContainer = document.querySelector(".card-section .container");
  let cardData = data.BusinessLinks;

  if (data.Mode == "Direct") {
    cardData = data.DirectLinks;
  } else if (data.Mode == "Personal") {
    cardData = data.PersonalLinks;
  }
  if (
    !cardData.Document.isActive == true &&
    !cardData.Document.URL &&
    !cardData.Document.URL.trim()
  ) {
    root.style.height = "100%";
    loader.classList.remove("d-flex");
    loader.classList.add("d-none");
  }
  if (cardData.Slider.Links && cardData.Slider.Links.trim()) {
    const sliderData = JSON.parse(cardData.Slider.Links);
    const swiper = createElement("div", "slider mt-4");
    swiper.innerHTML = `<div class="swiper mySwiper">
    <div class="swiper-wrapper">
    </div>
  </div>
  <div class="content">
    <p>
      Princeton Univercity Art Museum 80,000+ ancient & contemporary
      Works
    </p>
  </div>`;
    // let swiperWrapper = document.querySelector(".card-section .swiper-wrapper");

    cardContainer.appendChild(swiper);
    const swiperArray = sliderData.map((value) => {
      let swiperWrapper = document.querySelector(
        ".card-section .swiper-wrapper"
      );

      const swiperSlide = createElement("div", "swiper-slide");
      const sliderImg = createElement("img", "img-fluid", "", {
        src: value.URL,
      });
      swiperSlide.append(sliderImg);

      swiperWrapper.appendChild(swiperSlide);

      return;
    });
    getSlider();
  }
  if (
    cardData.Document.isActive == true &&
    cardData.Document.URL &&
    cardData.Document.URL.trim()
  ) {
    const canves = getDocument(cardData.Document.URL);
    console.log(cardData.Document);
    const Document = createElement("div", "documents mt-4");
    Document.innerHTML = `
    <div class="card mt-0 round-bottom-0">
              <div class="card_icon bg-bannner">
                <img
                  class="img-fluid pdf"
                  src="./assets/image/pdf.png"
                  alt=""
                />
              </div>
              <p>${cardData.Document.Title}</p>
              <a class="download-btn" href=${cardData.Document.URL} download=${cardData.Document.URL}>
                <img
                  class="img-fluid"
                  src="./assets/image/download.png"
                  alt=""
                />
              </a>
            </div>
            <div class="document">
              <div class="top-bar">
                <button class="btn" id="prev-page">❮</button>
                <button class="btn" id="next-page">❯</button>
              </div>
            </div>`;
    cardContainer.appendChild(Document);
    const topBar = document.querySelector(".card-section .document .top-bar");
    document
      .querySelector("#prev-page")
      .addEventListener("click", showPrevPage);
    document
      .querySelector("#next-page")
      .addEventListener("click", showNextPage);

    topBar.appendChild(canves);
    let value = canves.classList.contains("w-100");

    function checkFlag() {
      if (value === false || value === null) {
        window.setTimeout(() => {
          value = canves.classList.contains("w-100");
          checkFlag();
        }, 100); /* this checks the flag every 100 milliseconds*/
      } else {
        root.style.height = "100%";
        loader.classList.remove("d-flex");
        loader.classList.add("d-none");
      }
    }
    checkFlag();
  }

  if (
    cardData.FeaturedVideo.isActive == true &&
    cardData.FeaturedVideo.URL &&
    cardData.FeaturedVideo.URL.trim()
  ) {
    const cardContainer = document.querySelector(".card-section .container");
    const youtube = createElement("div", "youtube mt-4");
    youtube.innerHTML = `
    <div class="card mt-0 round-bottom-0">
    <div class="card_icon bg-bannner">
      <img
        class="img-fluid"
        src="./assets/image/youtube.png"
        alt=""
      />
    </div>
    <p>${cardData.FeaturedVideo.Title}</p>
  </div>
  <iframe
    class="youtube_video"
    src=${cardData.FeaturedVideo.URL}
    title="YouTube video player"
    frameborder="0"
    allowfullscreen
  ></iframe>`;
    cardContainer.appendChild(youtube);
  }

  const newData = JSON.parse(cardData.StandardLinks.Links).filter((value) => {
    return value.isActive == true;
  });

  newData.map((value) => {
    const detailPlaceHolder = document.querySelector(".card-section .cardItem");

    const imgUrl = getIcon(value.Name);
    let linkName = value.Title;

    if (!value.Title && !value.Title.trim()) {
      linkName = value.Name;
    }

    const card = createElement("a", "card", linkName, {
      href: value.URL,
      target: "_blank",
    });
    const cardIcons = createElement("div", "card_icon bg-bannner");
    const img = createElement("img", "img-fluid", "", { src: imgUrl });

    cardIcons.appendChild(img);
    card.appendChild(cardIcons);

    detailPlaceHolder.appendChild(card);
    return;
  });
}

getData();
