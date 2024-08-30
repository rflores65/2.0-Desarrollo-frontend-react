import Logo from './Default/_components/Logo';
import Description from './Default/_components/Description';
import OpenLink from '../components/OpenLink'
import Contador from './Default/_components/Contador';

const Default = () => {
    return (
        <div>
            <div className="App">
                <header className="App-header">

                    <Contador />
                    <Logo />
                    <Description />

                    <OpenLink title="Learn React" url="https://reactjs.org" />
                    <OpenLink title="Proyecto Git" url="https://Github.com" />

                </header>
            </div>
        </div>
    );
}

export default Default;