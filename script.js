
let btn = document.getElementById('find')

btn.addEventListener('click', function () {
    let titleinfo = document.getElementById('title').value.trim()
    let userinfo = document.getElementById('usercontainer')


    if (!titleinfo) {
        alert("please fill box sir....")
        return
    }

    fetch(`https://api.github.com/users/${titleinfo}`)
        .then((res) => res.json())
        .then((data) => {


         userinfo.style.display = "block"

            userinfo.innerHTML =

         `
            
         <img src="${data.avatar_url}" />
        <h3>${data.name || "No name provided"}</h3>
        <p><strong>Username :</strong> ${data.login}</p>
        <p><strong>Bio :</strong> ${data.bio || "N/A"}</p>
        <p><strong>Location :</strong> ${data.location || "Unknown"}</p>
        <p><strong>Followers :</strong> <span>${data.followers} </span></p>
        <p><strong>Public Repos :</strong><span> ${data.public_repos} </span></p>
        <a href="${data.html_url}" target="_blank">View Profile</a>

        `
        })


})