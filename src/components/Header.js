import React ,{useEffect} from 'react'
import styled from 'styled-components'
import {
    selectUserName ,
    selectUserPhoto,setUserSignIn,setSignOut} from '../features/user/userSlice';
import {useSelector,useDispatch} from 'react-redux'
import {auth,provider} from '../firebase'
import {useHistory} from 'react-router-dom'
function Header() {
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        auth.onAuthStateChanged(async (user)=>{
            if(user){
                const {displayName,email,photoURL} = user;
                dispatch(setUserSignIn({name:displayName,email,photo:photoURL}))
            }
            history.push('/')
        })
    }, [])

    const signIn = ()=>{
        auth.signInWithPopup(provider)
        .then((result)=>{
            const {displayName,email,photoURL} = result.user;
            dispatch(setUserSignIn({name:displayName,email,photo:photoURL}))
            history.push('/')
        })
    }
    const SignOut = ()=>{
        auth.signOut().then(()=>{
            dispatch(setSignOut());
            history.push('/login')
        })
    }
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            {
                !userName ? 
                <LoginContainer >
                    <Login onClick={signIn}>Login</Login> 
                </LoginContainer> :
                <>
                    <NavMenu>
                        <a href="#">
                            <img src="/images/home-icon.svg" />
                            <span>Home</span>
                        </a>
                        <a href="#">
                            <img src="/images/search-icon.svg" />
                            <span>Search</span>
                        </a>
                        <a href="#">
                            <img src="/images/watchlist-icon.svg" />
                            <span>Watch list</span>
                        </a>
                        <a href="#">
                            <img src="/images/original-icon.svg" />
                            <span>original</span>
                        </a>
                        <a href="#">
                            <img src="/images/movie-icon.svg" />
                            <span>movies</span>
                        </a>
                        <a href="#">
                            <img src="/images/series-icon.svg" />
                            <span>series</span>
                        </a>
                    </NavMenu>
                    <UserImage onClick={SignOut} src={userPhoto} />
                </>
            }
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0px 36px;
`
const Logo = styled.img`
    width:80px;

`
const NavMenu = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    margin-left: 25px;
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        img{
            height: 20px;
        }
        span{
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 1.42px;
            position: relative;
            &::after{
                content:'';
                height: 2px;
                background: #fff;
                width: 0%;
                position: absolute;
                left:0;
                right: 0;
                bottom:-6px;
                opacity: 0;
                transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            }
        }
        &:hover{
            span{
                &::after{
                    width: 100%;
                    opacity: 1;
                }
            }
        }
    }
`
const UserImage = styled.img`
    width:48px;
    height:48px;
    border-radius: 50%;
    cursor: pointer;
`

const Login = styled.div`
    border:1px solid #f9f9f9;
    padding:8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    cursor: pointer;
    background-color:rgba(0,0,0,0.5);
    transition: all 0.2s;
    &:hover{
        background-color:#f9f9f9;
        color:#000;
        border-color:transparent;
    }
`
const LoginContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    flex:1;
`