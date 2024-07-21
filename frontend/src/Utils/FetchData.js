const FetchData=async(url,option={})=>{
    try {
        const res=await fetch(url,option)
        const data=await res.json()
        return data
    } catch (error) {
        alert(error)
    }
}
export default FetchData