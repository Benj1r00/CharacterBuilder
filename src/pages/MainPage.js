import CharacterInfo from '../components/CharacterInfo';
import './MainPage.css';

export default function MainPage(){
    return(
        <div className="builder-container">
            <div className="sidebar-section">
                <CharacterInfo />
            </div>

            <div className="main-content-section">
                {/* місце для контейнера з поінтами */}
            </div>
        </div> 
    );
}