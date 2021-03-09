export default {
    GET_GRUPOS({ state, commit }) {
        //llamada a una API
        return new Promise((res) => {
            setTimeout(() => {
                commit('SET_GRUPOS', state.gruposIniciales);
                res()
            }, 1000)
        })
    }
}