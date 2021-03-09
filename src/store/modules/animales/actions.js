export default {
    GET_ANIMALES({ state, commit }) {
        //llamada a una API
        return new Promise((res) => {
            setTimeout(() => {
                commit('SET_ANIMALES', state.animalesIniciales);
                res()
            }, 1000)
        })
    }
}