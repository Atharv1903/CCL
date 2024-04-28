function searchUniversity() {
    const universityName = document.getElementById('university-name').value;

    fetch(`http://universities.hipolabs.com/search?name=${universityName}`)
    .then(response => response.json())
    .then(data => {
        if (data.length > 0) {
            const searchResults = data.map(university => `
                <div>
                    <h2>${university.name}</h2>
                    <p>Country: ${university.country}</p>
                    <p>Website: <a href="${university.web_pages[0]}" target="_blank">${university.web_pages[0]}</a></p>
                </div>
            `).join('');
            document.getElementById('search-results').innerHTML = searchResults;
        } else {
            document.getElementById('search-results').innerHTML = '<p>No universities found with the given name.</p>';
        }
    })
    .catch(error => {
        console.error('Error fetching university data:', error);
        document.getElementById('search-results').innerHTML = '<p>Failed to fetch university data. Please try again.</p>';
    });
}
