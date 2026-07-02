const catalogo = [
{ id: 1, titulo: 'Abbey Road', artista: 'The Beatles', genero: 'Rock', anio: 1969, precio: 1200, disponible: true, canciones: ['Come Together', 'Something', 'Here Comes the Sun'] },
{ id: 2, titulo: 'Thriller', artista: 'Michael Jackson', genero: 'Pop', anio: 1982, precio: 1500, disponible: true, canciones: ['Thriller', 'Billie Jean', 'Beat It'] },
{ id: 3, titulo: 'Dark Side of the Moon', artista: 'Pink Floyd', genero: 'Rock', anio: 1973, precio: 1350, disponible: false, canciones: ['Money', 'Time', 'Breathe'] },
{ id: 4, titulo: 'Rumours', artista: 'Fleetwood Mac', genero: 'Rock', anio: 1980, precio: 980, disponible: true, canciones: ['Go Your Own Way', 'Dreams', 'The Chain'] },
{ id: 5, titulo: 'The Miseducation', artista: 'Lauryn Hill', genero: 'RnB', anio: 1998, precio: 1100, disponible: true, canciones: ['Ex-Factor', 'Doo Wop', 'Everything is Everything'] }
];

// 1.1
const filtrarPorGenero = (catalogo, genero) => {
return catalogo.filter(album => album.genero.toLowerCase() == genero.toLowerCase());
};
console.log(filtrarPorGenero(catalogo, 'Rock'));

// 1.2
const soloDisponibles = (catalogo) => {
return catalogo.filter(catalogo => catalogo.disponible == true)
};
console.log(soloDisponibles(catalogo));

// 1.3
const filtrarPorPrecio = (catalogo, min, max) => {
    return catalogo.filter(catalogo => catalogo.precio <= max && catalogo.precio >= min)
};
console.log(filtrarPorPrecio(catalogo, 1000, 1400));

// 2.1
const aplicarDescuento = (catalogo, descuento) => {
    return catalogo.map(album =>({...album, precio: Math.round(album.precio * (1 - descuento / 100))}))    
};
const catalogoDesc = aplicarDescuento(catalogo, 10);
console.log(catalogoDesc[0].precio);
console.log(catalogo[0].precio);

// 2.2
const extraerTitulos = (catalogo) => {
    return catalogo.map(album => album.titulo)
};
console.log(extraerTitulos(catalogo));

// 3.1
const sumaPrecios = (catalogo) => {
    return catalogo.reduce((total, album) => total + album.precio, 0);
};
console.log(sumaPrecios(catalogo));

// 3.2
const sumaPrecios = (catalogo) => {
    return catalogo.reduce((total, album) => total + album.precio, 0) / catalogo.length;
};
console.log(sumaPrecios(catalogo));