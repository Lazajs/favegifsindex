import './StartFinding.scss'

function StartFinding() {
    const handle = ()=>{
        document.getElementById('search').focus()
        window.scrollTo(0,0)
    }

    return  <button onClick={handle} className="find">Start Finding</button>
}

export default StartFinding