import '../css/textcontent-component.css';
import Popup from './Popup';


const TextContent = (props) => {

    return (
            <div className="textContentComponent">
                <div className="contentWrapper crdStyle">
                    <img src="https://stanthonycommunitycenter.com/wp-content/uploads/wp-social/facebook/1423300644549424/2017/08/giphy.gif" alt="placeholderalt" />
        
                    <h2>Text Content Header Title Here</h2>
                    <Popup menuStatus="open" />

                    <p>Founded in 2019, NUVIA positioned itself as an ARM-based designer of server CPU chips. The company’s executive bio page makes the endeavor sound like an unintentional spinoff from Apple.</p>
                    
                    <p>CEO Gerard Williams III “was a Senior Director at Apple and Chief CPU Architect for nearly a decade with responsibilities for a range of leading-edge CPUs and SoCs across a broad array of devices.”
                        Co-founder Manu Gulati’s position at Apple was similar: “Manu spent eight years at Apple as the lead SoC architect responsible for numerous Apple leading-edge mobile SoCs across a range of devices.”
                        The third co-founder, John Bruno, spent five years at Apple “in the company’s platform architecture group where he founded Apple’s silicon competitive analysis team.”
                        </p>
                    
                    <p>This is a paragraph.his is a paragraph. his is a paragraph. his is a paragraph. </p>
                    <img src="../images/icons/delete.GIF" alt="placeholderalt" />
                </div>
            </div>
    )

};

export default TextContent;