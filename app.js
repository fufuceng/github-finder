const github = new Github;
const ui = new UI;
// Search input
const searchInput = document.getElementById('searchInput');

// Event listener
searchInput.addEventListener('keyup', function (e) {

    if (e.keyCode === 13) { // hit enter
        e.preventDefault();
        const query = e.target.value;

        if (query !== '') {
            github.getUser(query)
                .then(data => {
                    if (data.status === 404) {
                        const message = `${query} not found :/`;
                        ui.clearRepos();
                        ui.showAlert(message);
                    } else {
                        console.log(data);
                        ui.showProfile(data.profile);
                        ui.showRepos(data.repos);
                    }
                })
        } else {
            ui.clearProfile();
            ui.clearRepos();
        }
    }
});