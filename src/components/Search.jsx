import styled from 'styled-components'


const Search = () => {
    
    return (
        <SearchS>
                <form>
                    <a>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#919191" d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"></path></svg>
                    </a>
                    <input type="text" placeholder="Search or start new chat"/>
                </form>
                
        </SearchS>
    )
}

const SearchS = styled.div`
height: 7%;
width: 100%;
background-color: #F6F6F6;
display: flex;
justify-content: center;
align-items: center;
border-bottom: 1px solid #DADADA;
box-sizing: border-box;
form {
    display: flex;
    align-items: center;
    width: 95%;
    height: 70%;
    background-color: white;
    border-radius: 20px;
    a {
        padding-top: .2em;
        margin-right: 1em;
        margin-left: .6em; 
        svg {
            width: 19px;
            height: 19px;
        }
        
    }
    input {
        border: none;
        font-size: .63em;
        color: black;
        padding-bottom: .3em;
        width: 100%;
        &:focus {
            outline:none;    
        }
    }
}
`

export default Search