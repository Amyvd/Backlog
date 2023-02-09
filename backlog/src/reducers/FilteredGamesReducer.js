  const FilteredGamesReducer = (state , action) => {
    if(state === undefined){
        return [];
    }
    if(action.type === "FILTEREDGAMES"){
        console.log(action.payload)
        return action.payload;
    }
    return state;
 }

 export default FilteredGamesReducer;

