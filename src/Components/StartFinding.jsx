import './StartFinding.scss'

function StartFinding() {
    const handle = ()=>{
        window.scrollTo(0,0)
        document.getElementById('search').focus()
    }

    return  <button onClick={handle} className="find">Start Finding</button>
}

export default StartFinding