//movie api
//http://api.tvmaze.com/search/shows?q=girls

const form = document.querySelector("#search");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    deleteImg();
    const search = form.elements.q.value;
    const config = {params : {q : search}}
    const response = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    getImages(response.data);
    form.elements.q.value = "";
})

const getImages = (shows) => {
    for(let result of shows){
        if(result.show.image){
            const img = document.createElement("img");
            img.src = result.show.image.medium;
            document.body.append(img);
        }
        
    }
}

const deleteImg = () => {
    const images = document.querySelectorAll("img");
    images.forEach(image => {
        image.parentNode.removeChild(image);
    })
}