async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear loading message
        dataContainer.innerHTML = '';

        // Create a <ul> element
        const userList = document.createElement('ul');

        // Loop through users and append their names to the list
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the list to the container
        dataContainer.appendChild(userList);
    } catch (error) {
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', fetchUserData);
