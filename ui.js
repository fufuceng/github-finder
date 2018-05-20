class UI {
    constructor() {
        this.profileDiv = document.getElementById('profile');
        this.repoDiv = document.getElementById('repos');
    }

    showProfile(profile) {
        this.profileDiv.innerHTML = `
        <div class="card text-center mt-3">
            <div class="card-body">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid" src="${profile.avatar_url}">
                    <p class="text-muted">${profile.name}<br>@${profile.login}</p>
                    <a class="btn btn-sm btn-block btn-danger" target="_blank" href="${profile.html_url}"><i class="fas fa-sign-in-alt"></i>&nbsp;&nbsp;Go Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-info bg-">${profile.followers} Followers</span>
                    <span class="badge badge-info">${profile.following} Follows</span>
                    <span class="badge badge-info">${profile.public_repos} Public Repos</span>
                    <span class="badge badge-info">${profile.public_gists} Gists</span>
                    <br><br>
                    <ul class="list-group mt-1">
                        <li class="list-group-item text-muted small">
                            <strong>Bio:</strong>&nbsp;${profile.bio}
                        </li>
                        <li class="list-group-item text-muted small">
                        <strong>Company:</strong>&nbsp;${profile.company}
                        </li>
                        <li class="list-group-item text-muted small">
                            <strong>Website:</strong>&nbsp;${profile.blog}
                        </li>
                        <li class="list-group-item text-muted small">
                            <strong>Location:</strong>&nbsp;${profile.location}
                        </li>
                        <li class="list-group-item text-muted small">
                            <strong>Email:</strong>&nbsp;${profile.email}
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
        `;
    }

    showRepos(repos) {
        console.log(repos.length);
        let output = "<div class='card-columns mt-2'>";

        repos.forEach(repo => {

            const normalizedRepo = {
                name: repo.name,
                description: (repo.description === null) ? '-' : repo.description,
                created_at: new Date(repo.created_at).toLocaleDateString(),
                language: (repo.language === null) ? '-' : repo.language,
            };

            output += `
            <div class="card text-center">
            <div class="card-body">
              <h5 class="card-title"><a href="${repo.html_url}">${normalizedRepo.name}</a></h5>
              <span class="badge badge-info">${normalizedRepo.language}</span>
              <br><br>
              <p class="card-text">${normalizedRepo.description}</p>
              <p class="card-text">
                <span><i class="far fa-eye"></i>  ${repo.watchers_count}</span>&nbsp;&nbsp;
                <span><i class="far fa-star"></i>  ${repo.stargazers_count}</span>&nbsp;&nbsp;
                <span><i class="fas fa-code-branch"></i>  ${repo.forks}</span>&nbsp;&nbsp;
              </p>
              <p class="card-text text-muted small">${normalizedRepo.created_at}<p>
            </div>
          </div>
            `;
        });

        output += "</div>"

        this.repoDiv.innerHTML = output;
    }

    showAlert(message) {
        this.profileDiv.innerHTML = `
        <div class="alert alert-warning mt-3" role="alert">
            <p class="strong">${message}</p>
        </div>
        `;
    }


    clearProfile() {
        this.profileDiv.innerHTML = '';
    }

    clearRepos() {
        this.repoDiv.innerHTML = '';
    }

}