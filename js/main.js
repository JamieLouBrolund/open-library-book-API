//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://openlibrary.org/isbn/${choice}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        //include title
        document.querySelector('h2').innerText = data.title
        //add information about book
        document.querySelector('h3').innerText = data.description.value
        //add copywrite date
        document.querySelector('h4').innerText = data.copyright_date
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


