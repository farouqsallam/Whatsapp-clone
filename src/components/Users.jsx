import styled from 'styled-components'

const User = ({src}) => {
    return (
        <UserS>
            <img src={src} alt="photo"/>
            <div className="info">
                <div>4:18 PM</div>
                <span className="name">Lufy</span>
                <br/>
                <span className="last">Sanji I am hungry</span>
            </div>
            
        </UserS>
    )
}

const Users = () => {
    return (
       <Con>
           <User src={'https://wallpaperaccess.com/full/4726499.jpg'}/>
           <User src={'https://onepiecetheories.com/wp-content/uploads/2016/07/sanjionepiece-e1468017404801.jpg'}/>
           <User src={'https://i.pinimg.com/originals/b6/e6/07/b6e607ebec357a97121a13c14223c5ca.jpg'}/>
       </Con>
    )
}
const Con = styled.div`
width: 100%;
height: 85%;
overflow-x: hidden;
overflow-y: auto;

`

const UserS = styled.section`
height: 3.5em;
width: 100%;
box-sizing: border-box;
display: flex;
align-items: center;
padding: 0 0 0 .5em;
img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.info {
    margin-left: .5em;
    width: 83%;
    height: 100%;
    border-bottom: 1px solid #F2F2F2;
    padding-top: .5em;
    box-sizing: border-box;
    .name {
        font-size: .9em;
    }
    .last {
        font-size: .6em;
        color: #5C5C5C;
    }

    div {
        float: right;
        font-size: .55em;
        color: #8C8C8C;
        margin-top: .5em;
        margin-right: 1em;
    }
}


`

export default Users