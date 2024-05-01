const initState: StateType = {
    themeId: 1,
}
export type StateType = {
	themeId: number
}
export const themeReducer = (state = initState, action: ChangeThemeIdType): StateType => { // fix any
	//debugger
    switch (action.type) {
        // дописать
			case 'SET_THEME_ID':
				return {...state, themeId: action.id}
        default:
            return state
    }
}

//export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id }) // fix any
export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const)
type ChangeThemeIdType = ReturnType<typeof changeThemeId>