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
        `<img src = "populist_images/ch1 ukip ad campaign celebrity lifestyle eurocrat campaignlive 2014.jpeg" alt = "CampaignLive 2014 - UKIP European Parliament campaign">`,
        `<img src = "populist_images/ch1 ukip ad campaign who runs the country campaignlive 2014.jpeg" alt = "CampaignLive 2014 - UKIP European Parliament campaign">`,
        `<img src = "populist_images/a-young-rt-hon-tony-blair-mp-helps-launch-a-1992-general-election-BJ350W.jpg" style="width: 976px; height: 549px;" alt = "Alamy (https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alamy.com%2Fstock-photo-a-young-rt-hon-tony-blair-mp-helps-launch-a-1992-general-election-28343977.html&psig=AOvVaw1uSJ7SKKkSBmOE3MypkFYD&ust=1692820138463000&source=images&cd=vfe&opi=89978449&ved=0CBIQjhxqFwoTCOCjl8qE8YADFQAAAAAdAAAAABAE) - Tony Blair 1992: Majorism isn't working">`,
        `<img src = "populist_images/new labour1.jpg" alt = "Yahoo Finance (https://www.google.com/url?sa=i&url=https%3A%2F%2Fca.finance.yahoo.com%2Fnews%2Fnothing-really-working-anymore-britain-094121292.html&psig=AOvVaw1uSJ7SKKkSBmOE3MypkFYD&ust=1692820138463000&source=images&cd=vfe&opi=89978449&ved=0CBIQjhxqFwoTCOCjl8qE8YADFQAAAAAdAAAAABAJ) - Tony Blair 1992: Majorism isn't working">`,
        `<img src = "populist_images/new labour mug 1 buzzfeed.png" alt = "Buzzfeed: New Labour campaign mugs, 1997">`,
        `<img src = "populist_images/tony blair sun quora.jpg" alt = "Quora: Tony Blair endorsed by the Sun, 1997">`,
        `<img src = "populist_images/gordon-brown-i-increased-the-gap-between-rich-and-poor.jpg" alt = "CampaignLive: Conservative ad campaign, 2010">`,
        `<img src = "populist_images/bbc 2015 death of the campaign ad - 1978 conservative ad.jpg" alt = "BBC 2015: UK Conservative ad, 1978">`,
        `<img src = "populist_images/bbc 2015 death of the campaign ad - labour photoshop 2001.jpg" alt = "BBC 2015: Labour ad photoshopping Tory leader Sir Iain Duncan Smith into Margaret Thatcher, 2001">`,
        `<img src = "populist_images/campaign live which party will use outdoor most effectively 2015.png" alt = "CampaignLive: Conservative ad defaced, UK 2015">`,
        `<img src = "populist_images/nyt rutte.png" style="width: 593px; height: 862px;" alt = "NYT 2017 (https://www.nytimes.com/2017/01/24/world/europe/mark-rutte-netherlands-muslim-immigrants-trump.html): Netherlands' Mark Rutte Takes a Trump-Like Turn">`,
        `<img src = "populist_images/vvd 2017 campagneposter wiki - the economy could use some vvd.jpg" alt = "CampagnePoster Wiki: Netherlands VVD: 'The Economy Could Use a Little VVD', 2017">`,
        `<img src = "populist_images/wapo rutte 2017.png" style="width: 800px; height: 600px;" alt = "Washington Post 2017: Mark Rutte to immigrants: Act normal or leave">`,
        `<img src = "populist_images/fetzer 2019 vote leave vote ukip geography.png" alt = "Fetzer 2019: Geography of Vote Leave, UK">`,
        `<img src = "populist_images/broz et al 2021 trump performance 2016 vote share over romney 2012.png" style="width: 976px; height: 549px;" alt = "Broz et al. 2021: Trump performance, 2016, over Romney, 2012">`,
        `<img src = "populist_images/margalit et al 2022 p20 rise of right populist parties 1960 2020.png" style="width: 976px; height: 549px;" alt = "Margalit et al. 2022: Rise of right populist parties 1960-2020">`,
        `<img src = "populist_images/rhodes purdy et al 2023 p11 spread and intensification of discontentment parties.png" alt = "Rhodes-Purdy et al. 2023: Rise of discontentment parties">`,
        `<img src = "populist_images/verne el pais - pamela jilas.jpg" alt = "Verne el Pais 2020 (https://www.google.com/url?sa=i&url=https%3A%2F%2Fverne.elpais.com%2Fverne%2F2020%2F07%2F19%2Fmexico%2F1595114669_072603.html&psig=AOvVaw3MNoOcm2q8AS3sCZri1WmL&ust=1692822230441000&source=images&cd=vfe&opi=89978449&ved=0CBIQjhxqFwoTCNiw4q-M8YADFQAAAAAdAAAAABAE): Pamela Jilas, Chile">`,
        `<img src = "populist_images/getty images - javier milei 2023.jpg" style="width: 1000px; height: 700px;" alt = "Getty Images 2023 (https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn1.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcQN7X_MCYhWz9IBVljsGI1WGmWWYhZ25_P_roRNqnFVn41vTwbraR295Xnbt2MCdtiKQYhKye99rQ8TH9Q&psig=AOvVaw0QDhyHdaM3Rkq6LpGaL8Qt&ust=1692822260004000&source=images&cd=vfe&ved=0CBEQjhxqFwoTCLiKw8iM8YADFQAAAAAdAAAAABAD): Javier Milei, Argentina">`,
        `<img src = "populist_images/florianbasedmortimer rain epler.jpg" alt = "Twitter 2023 (https://twitter.com/BasedMortimer/status/1632461155988918276): Right-nationalist Rainn Epler, Estonia">`
    ];
    var nbr = Math.floor(Math.random() * populist_imgs.length)
    var random_popimg = populist_imgs[nbr];
    // print the random IMAGE
    document.write(random_popimg);
    // print alt text
    var caption = document.createElement('span');
    var caption.innerHTML = random_popimage.alt;
    var random_popimg2 = random_popimg.appendChild(caption);
    print(caption.innerHTML);
    document.write(random_popimg2);
}
