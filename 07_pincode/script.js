function findNearestPostOffice() {
    const zipCode = document.getElementById('zip-code').value;
    const branchName = document.getElementById('branch-name').value;

    fetch(`https://api.postalpincode.in/pincode/${zipCode}`)
    .then(response => response.json())
    .then(data => {
        const postOffices = data[0].PostOffice;
        const nearestPostOffice = postOffices.find(postOffice => postOffice.Name.includes(branchName));
        
        if (nearestPostOffice) {
            const postOfficeInfo = `
                <h2>Nearest Post Office Details</h2>
                <p>Name: ${nearestPostOffice.Name}</p>
                <p>Branch Type: ${nearestPostOffice.BranchType}</p>
                <p>Region: ${nearestPostOffice.Region}</p>
                <p>Pincode: ${nearestPostOffice.Pincode}</p>
            `;
            document.getElementById('post-office-info').innerHTML = postOfficeInfo;
        } else {
            document.getElementById('post-office-info').innerHTML = '<p>No post office found for the given branch name in the specified zip code.</p>';
        }
    })
    .catch(error => {
        console.error('Error fetching post office data:', error);
        document.getElementById('post-office-info').innerHTML = '<p>Failed to fetch post office data. Please try again.</p>';
    });
}
