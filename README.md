# Programacion Web Avanazada - 2025

## <strong>Trabajo Práctico: REACT

## Integrantes

- [FAI-3169] Benitez, Franco Fabian
- [FAI-4594] Pesce, Matías Nicolás
- [FAI-3220] Reyes Castelló, José Vicente

## Enlace a versión web

[!Eco](https://react-tp2-pcyc.vercel.app/)

## Descripción

<table>
<tr>
<td>
<img src='./src/assets/logo.svg' width= "250px">
</td>
<td>
<p align="Justify">!Eco es tu página para skins del CS2, podes buscar tu arma preferida, ver sus skins y a que caja pertenece, y también armarte un listado de favoritos y hacer tu propia colección.</p>
</td>
</table>

## Guia de instalación y uso del proyecto

### Requisitos

- Tener instalado [Node.js](https://nodejs.org/)

### Instalación

1. Clonar el repositorio con el siguiente comando:

```bash
git clone https://github.com/Niicoph/react-tp2.git
```

2. Abrir la terminal en el directorio _/react-tp2_ e ingresar el siguiente comando:

```bash
npm install
```

3. Luego de realizada la instalación, abrir la terminal en el directorio _/react-tps_ e ingresar el siguiente comando:

```bash
npm run dev
```

4. La terminal retornará el siguiente texto:
```bash
> react-tps@0.0.0 dev
> vite


  VITE v6.3.4  ready in 594 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

5. Copiar la URL que figura en local, en este caso:
```bash
http://localhost:5173/
```

## Guia de uso

###

#### Al ingresar encontras con el listado de skins

<img src="./src/assets/Readme/Home.jpg" alt="Home" width="862" height="600"><br>

> Puede suceder que las imágenes de las armas en ciertas condiciones no carguen, esto se debe a que el host de las mismas (https://raw.githubusercontent.com) tiene sus políticas de uso y devuelve un error 429 por la cantidad de solicitudes realizadas.

<img src="./src/assets/Readme/Navigation.jpg" alt="Navigation"><br>

> Podes navegar por las distintas páginas de skins.

#### En el header tenes hay varias funciones

<img src="./src/assets/Readme/Header.jpg" width="900" alt="Header">

#### Podes filtrar por rareza del arma

<img src="./src/assets/Readme/FiltroRareza.jpg" alt="Filtro">

#### También por tipo de arma

<table>
<tr>
<img src="./src/assets/Readme/Navbar.jpg" alt="NavFilter">
</tr>
<tr>
<img src="./src/assets/Readme/SkinNavFilter.jpg" alt="SkinNavFilter" width="800" height="600">
</tr>
</table>

#### Sino podes usar el buscador

<table>
<tr>
<img src="./src/assets/Readme/Searchbar.jpg" alt="Searchbar" >
</tr>
<tr>
<img src="./src/assets/Readme/SearchResults.jpg" alt="SearchbarResults" >
</tr>
<tr>
<img src="./src/assets/Readme/SearchNotFound.jpg" alt="SearchbarNotFound" >
</tr>

#### Cambiar el idioma

<img src="./src/assets/Readme/LanguageSelector.jpg" alt="LanguageSelector">

#### Y ver tus favoritos

<img src="./src/assets/Readme/FavIcon.jpg" alt="Favicon">

#### Cada skin se muestra en una tarjeta

<table>
<tr>
<img src="./src/assets/Readme/Card.jpg" alt="Card">
</tr>
</table>

> ¿Te acordas del ícono en la parte superior derecha? Probá hacerle click

<table>
<tr>
<img src="./src/assets/Readme/CardFavored.jpg" alt="CardFavored">
</tr>
</table>

> Ahora sabes que tu skin está en entre tus favoritos

#### Ahora vamos a ver tus favoritos

<img src="./src/assets/Readme/Favorites.jpg" alt="Favorites" width="910" height="350">

> Acá también podes filtrar por rarezas

#### Cuando entras a tu skin podes ver más información y en qué caja la podes conseguir

<img src="./src/assets/Readme/SkinDetails.jpg" alt="SkinDetails" width="900" height="500">

#### Y no te olvides que siempre podes volver al inicio haciendo click en la ruta

<img src="./src/assets/Readme/Breadcrumbs.jpg" alt="Breadcrumbs">

> Y un secreto, también hay dos íconos que tienen esa función oculta

<details>
    <summary>Cof cof</summary>
        <img src="./src/assets/Readme/LogoIcon.jpg" alt="LogoIcon" width="60" height="45">
        <img src="./src/assets/Readme/ClearIcon.jpg" alt="ClearIcon" width="60" height="45">
</details>
