const header = `
<header>
<h1><a href="index.html">MangAnnuaire</a></h1>
<nav>
    <ul>
        <li><a href="#anime">Anime</a></li>
        <li><a href="#manga">Manga</a></li>
        <li><a href="shopping.html">Commercial</a></li>
        <li><a href="#multimedia">Multimédia</a></li>
        <li><a href="#jmusic">J-Music</a></li>
        <li><a href="#culture">Culture asiatique</a></li>
        <li><a href="#info">Information</a></li>
        <li><a href="#jeux">Jeux vidéo</a></li>
        <li><a href="#fans">Fans</a></li>
        <li><a href="#auteurs">Auteurs</a></li>
        <li><a href="rank.html">Classement</a></li>
        <li><a href="avoid_manga.html">A éviter</a></li>
    </ul>
</nav>
</header>
`;



// Insérez le contenu dans le conteneur
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("header-container").innerHTML = header;
});

// Exportez la variable (peut être supprimé si vous n'utilisez pas la syntaxe require ailleurs)
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = header;
}