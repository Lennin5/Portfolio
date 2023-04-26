import React, { useEffect } from 'react';

import RobotBackgroundDefault from '../../../assets/img/experience/robot-bg-purple.png'
import RobotBackgroundSelected from '../../../assets/img/experience/robot-bg-cyan.png'

import House from '../../../assets/img/robots/House.glb';
import Spin from '../../../assets/img/robots/Spin.glb';
import Swing from '../../../assets/img/robots/Swing.glb';
import Card from '../../../assets/img/robots/Card.glb';
import Lion from '../../../assets/img/robots/Lion.glb';

const robots = [House, Swing, Spin, Card, Lion];

const ListRobots = (props) => {
    const { isMovileDevice } = props;

    useEffect(() => {
        setInterval(() => {
            var random_number = Math.floor(Math.random() * 5);
            if(document.getElementById("model-" + random_number)){
                document.getElementById("model-" + random_number).click();
            }            
        }, 2000);
    }, []);

    // call selectRobotInViewer 
    const selectRobotInViewer = (robot_model_id) => {
        // Get all models
        var robot_item = document.getElementsByClassName('robot-container');        
        for(var i = 0; i < robot_item.length; i++){
            // If robot selected is the same that robot in list
            if (robot_model_id === robot_item[i].id) {
                // Add class selected for scale animation
                robot_item[i].classList.add('robot-selected');
                // Add cyan background for selected item
                robot_item[i].style.backgroundImage = `url(${RobotBackgroundSelected})`;       
            }else{
                // Remove class selected for scale animation to default
                robot_item[i].classList.remove('robot-selected');
                // Add default purple background for no-seclected item
                robot_item[i].style.backgroundImage = `url(${RobotBackgroundDefault})`;
            }
          }        
    }

    return (
        <>
            {!isMovileDevice ? (
                // print robots for tablet and desktop mode                
                robots.map((robot, index) => (
                    <section className="col-12 col-sm-6 col-md-4 col-lg-2 robot-container" id={robot}
                        style={{background: `url(${index === 0 ? RobotBackgroundSelected : RobotBackgroundDefault})`}} key={index}>
                        <model-viewer 
                            className="robot"   
                            id={'model-'+index}
                            alt={'Robot Model '+robot}
                            src={robot} 
                            camera-controls-none
                            auto-rotate
                            auto-rotate-delay="5" 
                            rotation-per-second="30deg" 
                            orientation="0deg 0 180deg"
                            onClick={() => selectRobotInViewer(robot)}>
                        </model-viewer>
                    </section>
                ))
            ) : (
                robots.map((robot, index) => (
                    <section className="col-7 col-sm-4 col-md-3 col-lg-2 robot-container robot-item" id={robot} 
                    style={{background: `url(${index === 0 ? RobotBackgroundSelected : RobotBackgroundDefault})`, height: '250px'}} key={index}>
                        <model-viewer 
                            className="robot-small"
                            id={'model-'+robot}
                            alt={'Robot Model '+index} 
                            src={robot} 
                            camera-controls-none
                            auto-rotate
                            auto-rotate-delay="5" 
                            rotation-per-second="30deg" 
                            orientation="0deg 0 180deg"
                            onClick={() => selectRobotInViewer(robot)}>                                             
                        </model-viewer>                                                                        
                    </section>                    
                ))
            )}
        </>
    )
}

export default ListRobots