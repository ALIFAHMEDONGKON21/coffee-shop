const getallcoffe=()=>
{
    const all=localStorage.getItem('favorites')
    if(all)
    {
        const favorites=JSON.parse(all)
        return favorites
    }
    else
    {
        return[]
    }
}

const addfavorite=coffe=>
{
    const favorites=getallcoffe();
    const isexit=favorites.find(item=> item.id==coffe.id)
    if(isexit)return alert("coffe already exits")
    
    favorites.push(coffe)
    localStorage.setItem('favorites', JSON.stringify(favorites))

}


export {addfavorite,getallcoffe};
