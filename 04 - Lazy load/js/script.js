const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.status);
    })
    .then(data => {
        console.log(data);
        const resultsRegion = document.getElementById('results-region');
        const resultsData = data.map((item) => {
            return (`
                <img
                    key=${item.id}
                    src=${item.thumbnailUrl}
                    alt="random-thumbnail"
                />
            `)
        })
        .join(" ");

        resultsRegion.innerHTML = resultsData;
    })
    .catch(error => console.log(error.name, error.message))
}

fetchData();
