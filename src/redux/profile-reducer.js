let initialState = {
    text:"Le Louvre est un des meilleurs musées du monde. H se trouve dans un grand palais.C'est le remarquable œuvre de l'architecture française. En 1200, Philippe Auguste élève, près de la Seine, au point le plus faible de la défense de Paris, le château fort du Louvre.",
    photo:"https://cdn.hackaday.io/images/3553251501638077867.png",
    name:"Александров Александр Александрович"

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
    }
}

export default profileReducer;