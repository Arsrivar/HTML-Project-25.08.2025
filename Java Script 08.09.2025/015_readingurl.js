// http://localhost:52330/js/015_readingurl.html?name=pikachu&type=electric#anchor
const locationObject = window.location;

console.log(locationObject);
console.log('href',locationObject.href);

 console.log('protocol',locationObject.protocol);
 console.log('hostname',locationObject.hostname);
 console.log('host',locationObject.host);
 console.log('port',locationObject.port);
 console.log('origin',locationObject.origin);
 console.log('pathname',locationObject.pathname);
 console.log('hash',locationObject.hash);
 console.log('search',locationObject.search);


// console.log(params);

this.onload = ()=>{
    document.querySelector('#href').textContent = 'href'.toUpperCase() + ": " + locationObject.href;
    document.querySelector('#protocol').textContent = 'protocol'.toUpperCase() + ": " + locationObject.protocol;
    document.querySelector('#hostname').textContent = 'hostname'.toUpperCase() + ": " + locationObject.hostname;
    document.querySelector('#host').textContent = 'host'.toUpperCase() + ": " + locationObject.host;
    document.querySelector('#port').textContent = 'port'.toUpperCase() + ": " + locationObject.port;
    document.querySelector('#origin').textContent = 'origin'.toUpperCase() + ": " + locationObject.origin;
    document.querySelector('#pathname').textContent = 'pathname'.toUpperCase() + ": " + locationObject.pathname;
    document.querySelector('#hash').textContent = 'hash'.toUpperCase() + ": " + locationObject.hash;
    document.querySelector('#search').textContent = 'search'.toUpperCase() + ": " + locationObject.search;


    // looping through entrie key->values of an iterator
        for( const [key, value] of params.entries()){
        console.log(key, value);
        const p = document.createElement('p');
        p.textContent = key + ": "+ value;
        // p.innerHTML = `<em>${key}</em> : ${value}`; // expl of string interpolation
        document.querySelector('#params').appendChild(p);
    }                                                                                                           
    const params = new URLSearchParams(window.location.search);
    console.log(params);
    // getting the value when we know the key. We usually do when reading value in a url.
    console.log('the name is:',params.get('name'));
    const pokeName = params.get('name');
    const pokeType = params.get('type');
    console.log(pokeName, pokeType);
    // const h2 = document.createElement('h2');
    // h2.textContent = `Hello dear ${pokeName} of type ${pokeType}`;
    // document.querySelector('body').appendChild(h2);
}
