import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../Components/Header/Header';
import Headline from '../Components/Headline/Headline';
import Navber from '../Components/Navber/Navber';
import Leftasside from './Leftasside';
import Rightasside from './Rightasside';
import Loading from './Loading';

const Home = () => {
    // for category loading
    const {state} = useNavigation()
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w11/12 mx-auto '>
                    <Headline></Headline>
                </section>
                <section>
                    <nav>
                        <Navber></Navber>
                    </nav>
                </section>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 my-3 '>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <Leftasside></Leftasside>
                </aside>
                <section className='main col-span-6'>

                  {state=="loading"? <Loading></Loading> :<Outlet></Outlet>}  

                </section>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <Rightasside></Rightasside>
                </aside>
            </main>

            <section className='right-nav'></section>
        </div>
    );
};

export default Home;