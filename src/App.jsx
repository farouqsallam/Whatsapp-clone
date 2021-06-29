import styled from 'styled-components'

import SideBar from './components/SideBar'
import Main from './components/Main'


const App = () => {
    return (
        <div className="App">
            <Con>
                <SideBar />
                <Main />
            </Con>
        </div>
    )
}

const Con = styled.div`
width: 100vw;
height: 100vh;
display: flex;
`

export default App
