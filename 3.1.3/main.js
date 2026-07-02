const catalogo = [
{ id: 1, titulo: 'Abbey Road', artista: 'The Beatles', genero: 'Rock', anio: 1969,      precio: 1200, disponible: true, canciones: ['Come Together', 'Something', 'Here Comes the Sun'] },
{ id: 2, titulo: 'Thriller', artista: 'Michael Jackson', genero: 'Pop', anio: 1982,     precio: 1500, disponible: true, canciones: ['Thriller', 'Billie Jean', 'Beat It'] },
{ id: 3, titulo: 'Dark Side of the Moon', artista: 'Pink Floyd', genero: 'Rock', anio: 1973, precio: 1350, disponible: false, canciones: ['Money', 'Time', 'Breathe'] },
{ id: 4, titulo: 'Rumours', artista: 'Fleetwood Mac', genero: 'Rock', anio: 1980,       precio: 980, disponible: true, canciones: ['Go Your Own Way', 'Dreams', 'The Chain'] },
{ id: 5, titulo: 'The Miseducation', artista: 'Lauryn Hill', genero: 'RnB', anio: 1998, precio: 1100, disponible: true, canciones: ['Ex-Factor', 'Doo Wop', 'Everything is Everything'] }
];

const filtrarPorPrecio = (catalogo, min, max) => {
    return catalogo.filter(catalogo => catalogo.precio <= max && catalogo.precio >= min)
};
console.log(filtrarPorPrecio(catalogo, 1000, 1400));