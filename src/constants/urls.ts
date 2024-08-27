const baseUrl = "https://pokeapi.co/api/v2";

const urls = {
    pokemons: {
        base: `/pokemon?limit=20&offset=0&page=1`,
        base1: (offset: number) => `/pokemon?limit=20&offset=${offset}`,
        byId: (id: string) => baseUrl + '/pokemon/' + id,
        byName: (name: string) => baseUrl + '/pokemon/' + name,
        forms: "/pokemon-form",
        // formsById: (id) => {baseUrl + 'forms' + '/' + id}
    }
}

export {
    baseUrl,
    urls
}