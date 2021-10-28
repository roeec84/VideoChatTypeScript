import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState{
    socketId: string
}

const initialState: UserState = {
    socketId: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserSocketID(state, action: PayloadAction<UserState>) {
            state.socketId = action.payload.socketId
        }
    }
})

export const {setUserSocketID} = userSlice.actions;
export default userSlice.reducer;