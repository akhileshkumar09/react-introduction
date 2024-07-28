import Greeting from '../components/Greeting';
import Header from '../components/Header';
import Foooter from '../components/Foooter';
import ProfileCard from '../components/ProfileCard';
const Home = ()=>{
    return (
        <div className='App'>
            This is Home Section
     <Header/>
     <h1>Welcome! to React Learning Journey</h1>
     <Greeting Name="Akhilesh"/>
     <ProfileCard Name='Akhilesh kumar' age='21' bio='A web developer'/>
     <Foooter/>
        </div>
    )
}

export default Home;