import styled from 'styled-components'
import Search from './Search'
import Users from './Users'

const SideBar = () => {
    return (
        <Con>
            <Top>
                <img src="https://www.impel.eu/wp-content/uploads/2019/08/mediterranean-sea.jpg" alt="photo"/>
                <div className="control">
                <button>
                    <svg id="ee51d023-7db6-4950-baf7-c34874b80976" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 20.664a9.163 9.163 0 0 1-6.521-2.702.977.977 0 0 1 1.381-1.381 7.269 7.269 0 0 0 10.024.244.977.977 0 0 1 1.313 1.445A9.192 9.192 0 0 1 12 20.664zm7.965-6.112a.977.977 0 0 1-.944-1.229 7.26 7.26 0 0 0-4.8-8.804.977.977 0 0 1 .594-1.86 9.212 9.212 0 0 1 6.092 11.169.976.976 0 0 1-.942.724zm-16.025-.39a.977.977 0 0 1-.953-.769 9.21 9.21 0 0 1 6.626-10.86.975.975 0 1 1 .52 1.882l-.015.004a7.259 7.259 0 0 0-5.223 8.558.978.978 0 0 1-.955 1.185z"></path></svg>
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"></path></svg>
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
                </button>
                </div>
            </Top>
            
            <Search />

            <Users />
                    
        </Con>        
    )
}

const Con = styled.nav`
width: 30%;
height: 100%;
background: white;
border-right: 1px solid #DADADA;
box-sizing: border-box;

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
img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
}
.control {
    width: 34%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: .3em;
    svg {
    color: #919191;
    width: 19px;
    height: 25px;
    
}

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


export default SideBar
