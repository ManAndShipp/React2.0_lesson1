let url;

alert(this.searchString(this.browser));
if (navigator.userAgent = `safari`){
 url = `jpeg`;
} else {url = `webp`}

let image = document.createElement(`img`);
image.src = `/img/${url}/hi.${url}`;
document.body.appendChild(image); 

let images = [
  `img/img_1.jpg`,
  `img/img_22.jpg`,
  `img/img_3.jpg`
];

/**
 * 
 * @param {*} url - adress image
 * @function test url
 */

const TestStatus = (url) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function() {
      if (this.status == 404) {   
        let error = url;
        reject(error);
      } else {
        resolve();
      }
    };

    xhr.onerror = function() {
      reject(new Error("Network Error"));
    };

    xhr.send();
  });

};

const AddImgesToPage = (array) => {
  let img = [];
  let i = 0;
  array.forEach(element => {
    TestStatus(element).then(
      response => {
        img.push(document.createElement(`img`));
        img[i].height = 200;
        img[i].width = 200;
        img[i].src = element;
        document.body.appendChild(img[i]); 
        i++;
      },
      error => console.error((`IMG not found ${error}`))
    );
    
  });
};

AddImgesToPage(images);


console.error(`22`);