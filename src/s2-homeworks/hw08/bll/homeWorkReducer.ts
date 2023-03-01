import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {  // by name
            const copyState = [...state]
            if (action.payload === 'up') {
                copyState.sort((a, b) =>
                    a.name === b.name ? 0 : a.name > b.name ? 1 : -1
                )
                return copyState // need to fix
            } else if (action.payload === 'down') {
                copyState.sort((a, b) =>
                    a.name === b.name ? 0 : a.name < b.name ? 1 : -1
                )
                return copyState // need to fix
            }
            return copyState
         }
        case 'check': {
            return state.filter(man => man.age >= action.payload)
             // need to fix
        }
        default:
            return state
    }
}
