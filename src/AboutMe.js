import React, { useEffect, useRef } from 'react';
import styles from './AboutMe.module.css'; // Adjust this based on your CSS module's file name
import UnderlineText from './Underline';
import Disclaimer from './Disclaimer';
import DevelopmentSkillCards from './DevelopmentSkillCards';
import Carousel from './Carousel';

function AboutMe() {
    const elementsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.animateOnScroll);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        elementsRef.current.forEach(element => {
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className={styles.App}>
            <div ref={(el) => elementsRef.current.push(el)} className={styles.hero}>
                <div className={styles.profilePicture}>
                    <img src={process.env.PUBLIC_URL + "/headshot.jpg"} alt="Profile"/>
                </div>
                <h1 className={styles.heading}>Miles Higman</h1>            
            </div>
            <p ref={(el) => elementsRef.current.push(el)} className={styles.description}> 
                &#9;&#9;A <UnderlineText text="motivated"/>, <UnderlineText text="intelligent"/>, and <UnderlineText text="passionate"/> student developer with experience in server side web development and embedded systems.
            </p>
            <h2 ref={(el) => elementsRef.current.push(el)} className={styles.skillsTitle}>Development Skills</h2>
            <div ref={(el) => elementsRef.current.push(el)}>
                <DevelopmentSkillCards skills={["JavaScript", "Node.js", "React", "Embedded Systems", "Arduino", "C++", "Control Theory", "Java", "Rust"]}/>
            </div>
            
            <div ref={(el) => elementsRef.current.push(el)} className={styles.projects}>
                <h2 className={styles.projectsHeading}>My Projects</h2>
                
                <div className={styles.projectList}>
                <Carousel autoSlideInterval={9000}>
                    <div>
                        <h3 className={styles.projectTitle}>Arduino Interpreter (with MIT App Inventor)</h3>
                        <p className={styles.projectDescription}>I worked with the MIT App Inventor lab to develop a minium viable product for a JSON interpreter, running natively on Arduino, that assists in establishing interpreted, block-code communication between MIT App Inventor's block coding language and Arduino.</p>
                        <p className={styles.projectDescription}>This project is  in the 'MIT-App-Inventor-Parser-JSON' project folder in the project files section of this site.</p>
                        <Disclaimer className={styles.projectDescription}>This project is currently under development for improvements to command length (I am overhauling this project to use bytecode.)</Disclaimer>
                    </div>
                    <div>
                        <h3 className={styles.projectTitle}>LaTeX Derivations and Whitepapers</h3>
                        <p className={styles.projectDescription}>These PDFs, which can be found in the 'Other-Materials' folder, are some of the interesting derivations and ideas I've documented. Included are two papers about mechatronic motion planning and a whitepaper on a provisionally patented method of detecting cybersecurity threats from an attack graph.</p>
                        <p className={styles.projectDescription}>I am also working on a bytecode standards document to supplement the improvments I'm making to the first project.</p>
                    </div>
                    <div>
                        <h3 className={styles.projectTitle}>Fraternal Order of Police (FOP) Website Backend Developer</h3>
                        <p className={styles.projectDescription}>I developed the backend for the FOP website, with features including a contact form, donations, database management, custom content management system, and a passkey authentication system. The codebase for this project can be found in the "fop-info-backend-functionality" folder.</p>
                    </div>
                    <div>
                        <h3 className={styles.projectTitle}>Full Stack Web Applications</h3>
                        <p className={styles.projectDescription}>I've made multiple full-stack web applications (please excuse my lack of talent for UX) for exposure into higher level programming. Some examples of these type of web projects can be found in the 'Todo-List-App' and 'Chatroom-Web-App' folders.</p>
                    </div>
                    <div>
                        <h3 className={styles.projectTitle}>Robotics Code and Simulations</h3>
                        <p className={styles.projectDescription}>I've made robotics code fully equipped with Odometry, PID, and angular PID control in my first two years of high school for Vex Robotics. Also, I made a simulation of the mechatronic 3D motion planning I devised to better elucidate the inner workings of the algorithim.</p>
                        <p className={styles.projectDescription}>These projects can be found in the 'Robot-Arm-3D-Sim' and 'Robot--22-23 folders.</p>
                    </div>
                    <div>
                        <h3 className={styles.projectTitle}>Client Projects</h3>
                        <p className={styles.projectDescription}>During my junior year, I completed multiple client projects for my professional studies where I went above and beyond expectations, resulting in me and my team being invited to present at a corprate meeting for Walmart as well as my provisional patent.</p>
                        <p className={styles.projectDescription}>The code for each of these projects can be found in the 'Arvest-Client-Project', 'Walmart-Data-Science', and 'Curiousity-Gauntlet' folders.</p>
                    </div>
                    <div>
                        <h3 className={styles.projectTitle}>University of Arkansas SCARA Arm Controller</h3>
                        <p className={styles.projectDescription}>I programmed a tool for controlling SCARA arms to aid in 2D nanofabrication with the University of Arkansas under the MonArk Quantum Foundry grant. This tool can be found in the 'monark-scara-arm-library' folder.</p>
                        <p className={styles.projectDescription}>Note that one of the dependencies of this library is RMDLAdafruit, which was a fork I make of the <a className={styles.undecoratedLink} href='https://github.com/matthieuvigne/RMDX-Arduino'>RMDX library</a>. The source code for this fork is in the 'RMDLAdafruit' folder for completeness sake.</p>
                    </div>
                    <div>
                        <h3 className={styles.projectTitle}>Miscellaneous Projects</h3>
                        <p className={styles.projectDescription}>For completeness sake, I decided to include some miscellaneous projects, like a VSCode extension I developed and Wordle games I created, just to show that I do sort of hobbyist projects as well.</p>
                    </div>
                    </Carousel>
                </div>

                    <a href="/repo" className={styles.buttonLink}>
                        <button className={styles.gotoProjects}>View More Details</button>
                    </a>
            </div>
           
        </div>
    );
}

export default AboutMe;
