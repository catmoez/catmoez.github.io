// rotate between images

// print a random image from a list of images
function printRandomImg() {
    var bulldog_imgs = [
        `<img src = "bulldog_images/bulldog1.png" alt = "Winston the bulldog">`,
        `<img src = "bulldog_images/bulldog2.jpg" alt = "Bulldog in a hat">`,
        `<img src = "bulldog_images/bulldog3.jpg" alt = "angry chorkie">`,
        `<img src = "bulldog_images/bulldog4.jpg" alt = "Favourite bulldog">`
    ];
    var random_dogimg = bulldog_imgs[Math.floor(Math.random() * bulldog_imgs.length)];
    // print the random IMAGE
    document.write(random_dogimg);
}



// Aug. 22, 2023: Print political images
function printRandomPopImg() {
    var populist_imgs = [
        `<img src = "bulldog_images/bulldog1.png" alt = "Winston the bulldog">`,
        `<img src = "bulldog_images/bulldog2.jpg" alt = "Bulldog in a hat">`,
        `<img src = "bulldog_images/bulldog3.jpg" alt = "angry chorkie">`,
        `<img src = "bulldog_images/bulldog4.jpg" alt = "Favourite bulldog">`
    ];
    var random_dogimg = bulldog_imgs[Math.floor(Math.random() * bulldog_imgs.length)];
    // print the random IMAGE
    document.write(random_dogimg);
}
