let currentModel = "lamppu";


function changeHotspot(model) {
    let id = "hotspot-"+model;
    document.getElementById(id).hidden = false;
}

function toNext(object) {
    document.getElementById("model-viewer").src = "./models/"+object+".glb";
    console.log("Next model: ", object);
    currentModel = object;

    let list = document.getElementsByClassName("Hotspot");
    console.log(list);

    for (let i = 0; i< list.length; i++) {
        console.log(list[i]);
        list[i].setAttribute("hidden", "true")
    }

  changeHotspot(object);

}

function showTexture() {

    let url;
    switch (currentModel) {
        case "lamppu":
            url = "https://homedepot.scene7.com/is/image/homedepotcanada/p_1001516751.jpg?wid=1000&hei=1000&op_sharpen=1";
            break;
        case "kehykset":
            url = "https://www.pexels.com/photo/selective-focus-photo-of-a-short-coated-white-and-black-puppy-sitting-on-a-bench-3009441/";
            break;
        case "hyllykko":
            url = "https://images.thdstatic.com/productImages/21c9f2e9-d505-46ea-9351-dd526c9dfb7d/svn/york-wallcoverings-wallpaper-rolls-sr1552-64_1000.jpg";
            break;
        case "vase":
            url = "https://i.pinimg.com/originals/aa/34/39/aa3439e85117f6fedd43868f35c5fa53.jpg";
            break;

    }

    window.open(url);
}


document.getElementById("lamp-btn").addEventListener('click', function(){toNext('lamppu')});
document.getElementById("frame-btn").addEventListener('click', function(){toNext('kehykset')});
document.getElementById("bookshelf-btn").addEventListener('click', function(){toNext('hyllykko')});
document.getElementById("vase-btn").addEventListener('click', function(){toNext('vase')});

let hotspots = document.getElementsByClassName("HotspotAnnotation");

for (let i = 0; i< hotspots.length; i++) {

    hotspots[i].addEventListener('click', function () {
        showTexture()
    });
}

