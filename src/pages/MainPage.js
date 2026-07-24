import CharacterInfo from '../components/CharacterInfo';
import CharacterBuilder from '../components/CharacterBuilder';
import { useParams } from 'react-router-dom';
import './MainPage.css';

export default function MainPage(){
    const { save } = useParams()

    return(
        <div className="builder-container">
            <div className="sidebar-section">
                <CharacterInfo />
            </div>

            <div className="main-content-section">
                <CharacterBuilder isSave={save}/>
            </div>
        </div> 
    );
}   