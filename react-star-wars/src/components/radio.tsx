interface RadioProps {
    homeworld:string
    filterFunc:(homeworld:string)=>void
}
function Radio({homeworld,filterFunc}:RadioProps) {
    return (
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id={homeworld} value={homeworld} onChange={()=>filterFunc(homeworld)}/>
            <label className="form-check-label text-white" htmlFor={homeworld}>{homeworld}</label>
        </div>
        )
}

export default Radio;