let initialState = {
    text:"Claude Perrault construit la fameuse Colonnade. Mais en 1682 la Cour quitte officiellement le Louvre pour Versailles. Les travaux de reconstruction sont abandonnés. Des locataires de toutes sortes s'installent au Louvre. Dans la Colonnade l'espace est divisée en logements. Dans la cour, des maisons se sont élevées. En 1793 la Convention révolutionnaire transforme le palais en Muséum de la République. Napoléon Fr s'est emparé d'un grand nombre d’œuvres d'art. Au cours de la campagne le Louvre devient alors le plus riche musée du monde. Actuellement, le Musée du Louvre contient six musées ou départements: antiquités grecques et romaines, antiquités égyptiennes, antiquités orientales, sculptures, objets d'art, peintures. La peinture est représentée par les Écoles française, espagnole, hollandaise, flamande, italienne, allemande.",
    photo:"https://i.ytimg.com/vi/uy8KRHXqjVc/maxresdefault.jpg"
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
    }
}

export default newsReducer;