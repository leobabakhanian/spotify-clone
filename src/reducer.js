export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    discover_weekly: null,
    top_artists: null,
    spotify: null,
    //token: 'BQCB4zRSzZA8JfWdy4oZkzmawkm5CxEPtJVmnB3ovsuOJreC_IM9_61zQt2gqY7bgVBG34w65hRvo9IE_zE5kUQfw2W94pxcMaz6nuNHWYL63-spL8MzIjQJpvPsfTxI-M9Q7v6WMGJVxPogEJZUPEgZtK04uvqt5exnBrxrG3amPL6DfkxM',
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.user
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };

        case "SET_DISCOVER_WEEKLY":
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            };

        case "SET_PLAYING":
            return{
                ...state,
                playing: action.playing,
            };
        
        case "SET_ITEM":
            return{
                ...state,
                item: action.item,
            };

        case "SET_SPOTIFY":
            return{
                ...state,
                spotify: action.spotify,
            };

        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            }

        default:
            return state;
    }
};

export default reducer;