import { Routes, Route } from 'react-router-dom'
import './style.css';

function News() {
    return (
        <p><h1>News</h1></p>
    )
}

function About() {
    return (
        <h1>Южный Федеральный Университет</h1>
    )
}

function Contacts() {
    return (
        <h2>8 (928) 767 - 86 - 12</h2>
    )
}

export function Main(){
 return (
 <div class="main">
    <div class="main_container">
<section class="flex-center"><img src= "https://avatars.mds.yandex.net/i?id=d7bd9e711217f3ac1224b7f90a1486fe_l-11547894-images-thumbs&n=13" width={200} alt="cat"  /></section>
<article class="flex-center"> 
    <Routes>
        <Route path='/news' element= {<News />} />
        <Route path='/about' element= {<About />} />
        <Route path='/contacts' element= {<Contacts />} />
        <Route path= '*' element= {<h3>Некорректная ссылка</h3>} />
    </Routes>
</article>
<aside class="flex-center">Golets Anna Nikolaevna</aside>

    </div>
 </div>
 )
}
   
export default Main;