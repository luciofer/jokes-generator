const jokeBtn = document.querySelector("#btn");
const jokeEl = document.querySelector("#joke")

const apiKey = "WAH1kDgIj3e0NP1T+AIklQ==lD5ucBa1ofC7OhWO";
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options = {
    method: "GET",
    headers: {
        'X-Api-Key' : apiKey
    }
};

async function getJoke(){
    try {
        jokeEl.innerText = "Updating..."
        jokeBtn.disabled = true
        jokeBtn.innerText = "Loading..."
    
        const response = await fetch(apiURL, options)
        const data = await response.json()
    
        jokeBtn.disabled = false
        jokeBtn.innerText = "Tell me a Joke"
        jokeEl.innerText = data[0].joke
        
    } catch (error) {
        jokeEl.innerText = "An error happened, try again later."
        jokeBtn.disabled = false
        jokeBtn.innerText = "Tell me a Joke"
        console.log(error)
    }

}

jokeBtn.addEventListener('click', getJoke)