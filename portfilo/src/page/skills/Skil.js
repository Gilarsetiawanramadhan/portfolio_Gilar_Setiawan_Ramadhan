import "./skill.css";
import NavbarList from "../../componen/navbar/Navbar";

const Skil = () => {

    const html = 60;

    return (
        <>
            <header>
                <NavbarList />
                <div className="skill">
                    <h1 className="topik">my skilss</h1>
                    <ul>
                        <li>HTML</li>
                        <div className="progress" style={{width:"90%"}}>
                            <span 
                                    style={{
                                        width: "42vw", 
                                        background: "aqua",
                                        textAlign: "-webkit-right",
                                        fontFamily: "monospace",
                                        fontWeight: "bolder"
                                        
                                        }}
                                    >100%
                            </span>
                        </div>
                        <br/>
                        <li>CSS</li>
                        <div className="progress" style={{width:"90%"}}>
                            <span 
                                    style={{
                                        width: "35vw", 
                                        background: "aqua",
                                        textAlign: "-webkit-right",
                                        fontFamily: "monospace",
                                        fontWeight: "bolder"
                                        
                                        }}
                                    >80%
                            </span>
                        </div>
                        <br/>
                        <li>REACT</li>
                        <div className="progress" style={{width:"90%"}}>
                            <span 
                                    style={{
                                        width: "22vw", 
                                        background: "aqua",
                                        textAlign: "-webkit-right",
                                        fontFamily: "monospace",
                                        fontWeight: "bolder"
                                        
                                        }}
                                    >50%
                            </span>
                        </div>
                        <br/>
                        <li>BOOTSTRAP</li>
                        <div className="progress" style={{width:"90%"}}>
                            <span 
                                    style={{
                                        width: "42vw", 
                                        background: "aqua",
                                        textAlign: "-webkit-right",
                                        fontFamily: "monospace",
                                        fontWeight: "bolder"
                                        
                                        }}
                                    >100%
                            </span>
                        </div>
                        <br/>
                        <li>JAVASCRIPT</li>
                        <div className="progress" style={{width:"90%"}}>
                            <span 
                                    style={{
                                        width: "22vw", 
                                        background: "aqua",
                                        textAlign: "-webkit-right",
                                        fontFamily: "monospace",
                                        fontWeight: "bolder"
                                        
                                        }}
                                    >50%
                            </span>
                        </div>
                        <br/>
                    </ul>
                </div>
            </header>
        </>
    );
};

export default Skil;

// width: 42vw;
//     background: aqua;
//     text-align: -webkit-right;
//     font-family: monospace;
//     font-weight: bolder;
