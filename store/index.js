export const state = () => ({
    message: 'default store message'
})

export const mutations = {
    storeMessageChange(state) {
        state.message = 'change store message'
    },
    storeMessageReturn(state) {
        state.message = 'default store message'
    }
}