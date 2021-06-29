import styled from 'styled-components'
import Area from './Area'
import Input from './Input'

const Main = () => {
    return (
        <Con>
            <Top>
                <div className="info">
                    <img src="https://wallpaperaccess.com/full/4726499.jpg" alt="photo"/>
                    <div>
                        <span className="name">Monkey D. Lufy</span>
                        <span className="statu">online</span>
                    </div>
                </div>
                <div className="control">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#919191" d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"></path></svg>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="#919191" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
                    </button> 
                </div>
            </Top>

            <Con2>
                <Area />
                <Input />
            </Con2>
            

        </Con>
    )
}

const Con = styled.main`
width: 70%;
height: 100%;
background-image: url('/background.jpg');
position: relative;
`
const Con2 = styled.div`
box-sizing: border-box;
height: 92%;
display: flex;
flex-direction: column;
justify-content: space-between;
`

const Top = styled.div`
height: 8%;
width: 100%;
background-color: #EDEDED;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
box-sizing: border-box;
padding: 0 1em 0 .8em;
box-shadow: 0 1px #d3d3d39b;
img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-top: .3em;
}
.info {
    display: flex;
    
    box-sizing: border-box;
    align-items: center;
    margin-bottom: .4em; 
    div {
        margin-left: .7em;
        margin-top: .5em;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        .name {
            font-size: .8em;
        }
        .statu {
            font-size: .55em;
            color: #737373;
            margin-top: .2em;
        }
    }
}
.control {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 3em;
    height: 100%;
    margin-top: .3em;
    button {
    background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
    }
}

`

export default Main