//Use latest JS syntax

function changeColor() {
    //Get data-item-altName attribute from the clicked element in vanilla JS
    var color = this.getAttribute('data-item-altname');
    //Get "tee" or "hoodie" string from a string like category/tee.md or category/hoodie.md
    var category = this.getAttribute('data-item-category').split('/')[1].split('.')[0];

    var productImage = document.querySelector('.product__image');
    // Get src attribute from de productImage variable and get the name of the image without the extension and without t prefix following this format t_shirt_red.png
    var src = productImage.getAttribute('src').split('/');
    var productName = src[src.length - 1].split('.')[0].split('_')[0];
    productImage.src = '/images/' + category  + '/' + productName + '/' + productName + '_' + color + '.jpg'; 
}