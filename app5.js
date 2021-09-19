axios.get('https://pokeapi.co/api/v2/pokemon/1').then((res) => {
    console.log(res.data);
}).catch((err) => {
  console.log(err);
});

const fetchNewPokemon = (url = 'https://pokeapi.co/api/v2/pokemon/1') => {
    return axios.get(url);
};

const printPokemon = ({ data }) => {
    console.log(data);
};


fetchNewPokemon()
.then(printPokemon)
.catch((err) => {
    console.log('ERROR!!!', err);
});

function getData() {
    const data = axios.get('https://pokeapi.co/api/v2/pokemon/1').then((data) => {
        console.log(data);
    });
    console.log(data);
}

async function todo(){
    return 'SHOP!!!';
}
todo().then((val) => {
    console.log('PROMISED RESOLVED WITH: ', val);
});

function add(x, y) {
    return new Promise((resolve, reject) => {
      if (typeof x !== 'number' || typeof y !== 'number') {
         reject('X and Y must be numbers!'); 
      }
      resolve(x + y);
    });
}

add(6,7).then(val => {
    console.log('PROMISED RESOLVED WITH: ', val);
}).catch(err => {
   console.log('PROMISED REJECTED WITH: ', err);
});


async function getPokemon() {
    try {
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
    } catch(e) {
       console.log('IN CATCH!', e);
    }
}


getPokemon();

async function getGeneration() {
    try {
       const res = await axios.get('https://pokeapi.co/api/v2/generation/3/');
       console.log(res.data);
    } catch(e) {
       console.log('IN CATCH!', e);
    }
};

getGeneration();


async function getAbilities() {
    const res = await axios.get('https://pokeapi.co/api/v2/ability/65/');
    console.log(res.data);
};

async function getRegion() {
    try {
      const res = await axios.get('https://pokeapi.co/api/v2/region/3/');
      console.log(res.data);
    } catch(e) {
       console.log('IN CATCH!', e);
    }
};

async function getpokedex() {
    try {
      const res = await axios.get('https://pokeapi.co/api/v2/pokedex/15/');
      console.log(res.data);
    } catch(e) {
      console.log('IN CATCH!', e);
    }
}

async function getLanguage() {
    try {
      const res = await axios.get('https://pokeapi.co/api/v2/language/9/');
      console.log(res.data);
    } catch(e) {
       console.log('IN CATCH!', e);
    }
}

async function getPokeapi() {
    try {
      const res = await axios.get('https://pokeapi.co/api/v2/version/2/');
      console.log(res.data);
    } catch(e) {
       console.log('IN CATCH!', e);
    }
}

getRegion();
getAbilities();
getpokedex();
getLanguage();
getPokeapi();
getData();


// SEQUENTIAL REQUESTS!
async function get3Abilities() {
    const abil1 = await axios.get('https://pokeapi.co/api/v2/ability/65/');
    const abil2 = await axios.get('https://pokeapi.co/api/v2/ability/66/');
    const abil3 = await axios.get('https://pokeapi.co/api/v2/ability/67/');
    console.log(abil1.data);
    console.log(abil2.data);
    console.log(abil3.data);
}

get3Abilities();

// PARALLEL REQUESTS
async function get3Region() {
    const prom1 = await axios.get('https://pokeapi.co/api/v2/region/1/');
    const prom2 = await axios.get('https://pokeapi.co/api/v2/region/4/');
    const prom3 = await axios.get('https://pokeapi.co/api/v2/region/3/');
    const results = await Promise.all([prom1, prom2, prom3]);
    printRegion(results);
} 

function printRegion(results) {
    for(let region of results){
      console.log(region.data.name);  
    }
}

async function get4Generation() {
    const prom1 = await axios.get('https://pokeapi.co/api/v2/generation/1/');
    const prom2 = await axios.get('https://pokeapi.co/api/v2/generation/2/');
    const prom3 = await axios.get('https://pokeapi.co/api/v2/generation/3/');
    const prom4 = await axios.get('https://pokeapi.co/api/v2/generation/4/');
    const results = await Promise.all([prom1, prom2, prom3, prom4]);
    printGeneration(results);
}

function printGeneration(results) {
    for(let generation of results){
        console.log(generation.data.name);
    }
}

async function get4pokedex() {
    const prom1 = await axios.get('https://pokeapi.co/api/v2/pokedex/15/');
    const prom2 = await axios.get('https://pokeapi.co/api/v2/pokedex/16/');
    const prom3 = await axios.get('https://pokeapi.co/api/v2/pokedex/17/');
    const prom4 = await axios.get('https://pokeapi.co/api/v2/pokedex/18/');
    const results = await Promise.all([prom1, prom2, prom3, prom4]);
    printPokedex(results);
}

function printPokedex(results) {
    for(let pokedex of results){
        console.log(pokedex.data.name);
    }
}

async function get6Language() {
    const prom1 = await axios.get('https://pokeapi.co/api/v2/language/3/');
    const prom2 = await axios.get('https://pokeapi.co/api/v2/language/1/');
    const prom3 = await axios.get('https://pokeapi.co/api/v2/language/5/');
    const prom4 = await axios.get('https://pokeapi.co/api/v2/language/6/');
    const prom5 = await axios.get('https://pokeapi.co/api/v2/language/7/');
    const prom6 = await axios.get('https://pokeapi.co/api/v2/language/9/');
    const results = await Promise.all([prom1, prom2, prom3, prom4, prom5, prom6]);
    printLanguage(results);
}

function printLanguage(results){
    for(let language of results){
        console.log(language.data.name);
    }
}

async function get6Pokeapi() {
    const prom1 = await axios.get('https://pokeapi.co/api/v2/version/3/');
    const prom2 = await axios.get('https://pokeapi.co/api/v2/version/4/');
    const prom3 = await axios.get('https://pokeapi.co/api/v2/version/5/');
    const prom4 = await axios.get('https://pokeapi.co/api/v2/version/6/');
    const prom5 = await axios.get('https://pokeapi.co/api/v2/version/7/');
    const prom6 = await axios.get('https://pokeapi.co/api/v2/version/8/');
    const results = await Promise.all([prom1, prom2, prom3, prom4, prom5, prom6]);
    printPokeapi(results);
}

function printPokeapi(results){
    for(let pokeapi of results){
        console.log(pokeapi.data.name);
    }
}

get3Region();
get4Generation();
get4pokedex();
get6Language();
get6Pokeapi();

function changeBodyColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    });
}

async function lightShow() {
    await changeBodyColor('blue', 1000);
    await changeBodyColor('black', 1000);
}

lightShow();