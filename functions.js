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
        `<img src = "populist_images/ch1 FT 2014 UKIP ad campaign.jpg" alt = "FT 2014 - UKIP European Parliament campaign">`,
        `<img src = "populist_images/ch1 ukip ad campaign celebrity lifestyle eurocrat campaignlive 2014.jpg" alt = "CampaignLive 2014 - UKIP European Parliament campaign">`,
        `<img src = "populist_images/ch1 ukip ad campaign who runs the country campaignlive 2014.jpg" alt = "CampaignLive 2014 - UKIP European Parliament campaign">`,
        `<img src = "populist_images/a-young-rt-hon-tony-blair-mp-helps-launch-a-1992-general-election-BJ350W.jpg" alt = "Alamy (https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alamy.com%2Fstock-photo-a-young-rt-hon-tony-blair-mp-helps-launch-a-1992-general-election-28343977.html&psig=AOvVaw1uSJ7SKKkSBmOE3MypkFYD&ust=1692820138463000&source=images&cd=vfe&opi=89978449&ved=0CBIQjhxqFwoTCOCjl8qE8YADFQAAAAAdAAAAABAE) - Tony Blair 1992: Majorism isn't working">`,
        `<img src = "populist_images/new labour1.jpg" alt = "Yahoo Finance (https://www.google.com/url?sa=i&url=https%3A%2F%2Fca.finance.yahoo.com%2Fnews%2Fnothing-really-working-anymore-britain-094121292.html&psig=AOvVaw1uSJ7SKKkSBmOE3MypkFYD&ust=1692820138463000&source=images&cd=vfe&opi=89978449&ved=0CBIQjhxqFwoTCOCjl8qE8YADFQAAAAAdAAAAABAJ) - Tony Blair 1992: Majorism isn't working">`,
        `<img src = "populist_images/new labour mug 1 buzzfeed.jpg" alt = "Buzzfeed: New Labour commemorative mugs, 1997">`,
        `<img src = "populist_images/tony blair sun quora.jpg" alt = "Quora: Tony Blair endorsed by the Sun, 1997">`,
        `<img src = "populist_images/gordon-brown-i-increased-the-gap-between-rich-and-poor.jpg" alt = "CampaignLive: Conservative ad campaign, 2010">`,
        `<img src = "populist_images/bulldog1.png" alt = "Winston the bulldog">`,
        `<img src = "populist_images/bulldog2.jpg" alt = "Bulldog in a hat">`,
        `<img src = "populist_images/bulldog3.jpg" alt = "angry chorkie">`,
        `<img src = "populist_images/bulldog4.jpg" alt = "Favourite bulldog">`,
         `<img src = "populist_images/bulldog1.png" alt = "Winston the bulldog">`,
        `<img src = "populist_images/bulldog2.jpg" alt = "Bulldog in a hat">`,
        `<img src = "populist_images/bulldog3.jpg" alt = "angry chorkie">`,
        `<img src = "populist_images/bulldog4.jpg" alt = "Favourite bulldog">`,
         `<img src = "populist_images/bulldog1.png" alt = "Winston the bulldog">`,
        `<img src = "populist_images/bulldog2.jpg" alt = "Bulldog in a hat">`,
        `<img src = "populist_images/bulldog3.jpg" alt = "angry chorkie">`,
        `<img src = "populist_images/bulldog4.jpg" alt = "Favourite bulldog">`
    ];
    var random_dogimg = bulldog_imgs[Math.floor(Math.random() * bulldog_imgs.length)];
    // print the random IMAGE
    document.write(random_dogimg);
}
