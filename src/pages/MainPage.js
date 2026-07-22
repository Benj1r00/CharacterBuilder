import CharacterInfo from '../components/CharacterInfo';
import CharacterBuilder from '../components/CharacterBuilder';
import './MainPage.css';

export default function MainPage(){
    return(
        <div className="builder-container">
            <div className="sidebar-section">
                <CharacterInfo />
            </div>

            <div className="main-content-section">
                <CharacterBuilder/>
            </div>
        </div> 
    );
}