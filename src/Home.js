import { Outlet, Link } from 'react-router-dom'
import vid from './testing.mp4'
import './Home.css'
const Home = ()=>{
    return(
        <>
        <div className='container maindiv p-0'>
            <div className='row'>
                <div className='col-lg-4'></div>
                <div className='col-lg-4 col-sm-12 maincontainer text-center'>
                    <h5 className='mt-3 controls '>For you | Following</h5>
                    {/* <div className='reacts'>
                        <i class="fa-regular fa-heart"></i>
                    </div> */}
                    <video className='mainvideo' controls loop preload="none">
                        <source src={vid} type="video/mp4"/>
                    <div class="progress bar">
                        <progress id="progress" value="0" min="0">
                            <span id="progress-bar"></span>
                        </progress>
                    </div>
                    </video>
                    <video className='mainvideo' autoPlay='true' muted='false' loop>
                        <source src={vid} type="video/mp4"/>
                    </video>
                    <video className='mainvideo' autoPlay muted loop preload="none">
                        <source src={vid} type="video/mp4"/>
                    </video>
                    <video className='mainvideo' autoPlay muted loop preload="none">
                        <source src={vid} type="video/mp4"/>
                    </video>
                    <video className='mainvideo' autoPlay muted loop preload="none">
                        <source src={vid} type="video/mp4"/>
                    </video>
                    <video className='mainvideo' autoPlay muted loop preload="none" >
                        <source src={vid} type="video/mp4"/>
                    </video>
                    {/* <img className='mainvideo' src='https://images.unsplash.com/photo-1678729982804-0bcb5000c589?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='kjhgfghjkl' /> */}
                </div>
                <div className='col-lg-4'></div>
            </div>
        </div>
        </>
    )
}


const Footer = ()=>{
    return(
        <>
        <Outlet/>
        <div class="container">
           <div className='row'>
                <div className='col-lg-4'></div>
                <div className='col-lg-4 col-sm-12 col-md-6'>
                    <footer className='fixed-bottom center'>
                    <Link to='/'><i class="fa-solid fa-house"></i></Link>
                    <Link to='/search'><i class="fa-solid fa-magnifying-glass"></i></Link>
                    <Link to=''><i class="fa-solid fa-plus" ></i></Link>
                    <Link to=''><i class="fa-regular fa-bookmark"></i></Link>
                    <Link to=''><i class="fa-solid fa-user"></i></Link>
                    </footer>
                </div>
                <div className='col-lg-4'></div>
           </div>
        </div>  
        </>
    )
}


export {Home,Footer}