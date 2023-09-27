function submitForm() {
    console.log("Function is called"); // Check if the function is called

    const titleElem = document.getElementById('title');
    const contentElem = document.getElementById('content');
    const imageElem = document.getElementById('image');
    const videoElem = document.getElementById('video');
    const dataSection = document.getElementById('dataSection');

    console.log(titleElem, contentElem, imageElem, videoElem, dataSection); // Check if elements are fetched correctly

    const contentCard = document.createElement('div');
    contentCard.className = 'content-card';

    const h3 = document.createElement('h3');
    h3.textContent = titleElem.value;
    contentCard.appendChild(h3);

    const p = document.createElement('p');
    p.textContent = contentElem.value;
    contentCard.appendChild(p);

    if (imageElem.files[0]) {
        const imagePreview = URL.createObjectURL(imageElem.files[0]);
        const img = document.createElement('img');
        img.src = imagePreview;
        img.alt = 'Uploaded Image';
        img.className = 'uploaded-content';
        contentCard.appendChild(img);
    }

    if (videoElem.files[0]) {
        const videoPreview = URL.createObjectURL(videoElem.files[0]);
        const vid = document.createElement('video');
        vid.src = videoPreview;
        vid.controls = true;
        vid.autoplay = true;
        vid.className = 'uploaded-content';
        contentCard.appendChild(vid);
    }

    dataSection.appendChild(contentCard);

    // Clear the form inputs
    titleElem.value = '';
    contentElem.value = '';
    imageElem.value = '';
    videoElem.value = '';
}
