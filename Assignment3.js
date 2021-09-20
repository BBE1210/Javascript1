alert('This Function accepts a URL')

function createImg() {
    let img2 = geturl.img1.value;
    let ul = document.getElementById("urlImages");
    let li = document.createElement("LI");
    li.appendChild(document.createTextNode(img2));
    ul.appendChild(li);
    alert (img2)
}

function createImage() {
    let img = document.createElement('img');
    //img.src = 'https://jooinn.com/images/sunset-532.png';
    //img.src = 'https://getwallpapers.com/wallpaper/full/2/4/3/168836.png';
    //img.src = 'https://getwallpapers.com/wallpaper/full/1/4/7/1289321-rainy-fall-wallpaper-1920x1200-smartphone.jpg
    //img.src = 'https://jooinn.com/images/sunset-532.png';
    alert ("Image Element Added");
    img.src = geturl.img1.value;
    alert (img.src);
    img.setAttribute("width", "150");
    img.setAttribute("height", "130");
    img.setAttribute("alt", "Cool Images");
    document.getElementById ('imgOutPut').appendChild(img);
    //document.write('The first element is' + document.geturl.elements[0].name);
    };

    function deleteImage() {
    var parent = document.getElementById (0);
    alert (parent);
    let child = 'https://jooinn.com/images/sunset-532.png'
     //  var child = document.getElementById ('img');
   
       alert (child);
        parent.removeChild(child)
        };
    
  
 


