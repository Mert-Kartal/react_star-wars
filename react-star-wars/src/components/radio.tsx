

function Radio({homeworld}:{homeworld: string}) {
    return (
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id={homeworld} value={homeworld} onClick={()=>{console.log(homeworld)}} />
            <label className="form-check-label text-white" htmlFor={homeworld}>{homeworld}</label>
        </div>
        )
}

export default Radio