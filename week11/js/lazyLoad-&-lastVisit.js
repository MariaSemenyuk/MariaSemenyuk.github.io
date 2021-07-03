// loading process IMG

let imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};






// timing process

const imgOptions = {
  rootmargin: "0px 0px 50px 0px",
  threshold: 1
};



if('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if(item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}





// last visit

if (typeof(Storage) !== "undefined") {
  if (localStorage.lastVisit != "undefined") {
    const lastVisit = new Date(localStorage.lastVisit).getDate();
    const thisVisit = new Date().getDate();
    const betweenVisits = thisVisit - lastVisit;
    document.getElementById('lastVisit').innerHTML = 'Last time you visit this page ' + betweenVisits + ' days ago.';
  } else {
    document.getElementById('lastVisit').innerHTML = "It is your first visit the page."
    window.localStorage.lastVisit =  new Date();
  }
  

} else {
  console.log("this is session storage");
}