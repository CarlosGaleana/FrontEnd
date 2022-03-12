const fetchPokemon = () =>{
    const PokeName = document.getElementById("Pokename");
    let pokeInput =   PokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) =>{
        if(res.status != "200"){
            pokeImage("./pikachull.gif");
        }
        else{
            console.log(res);
            return res.json();
        }
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg);
    })
}
//fetchPokemon();

const pokeImage = (url) =>{
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}