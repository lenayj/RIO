import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React, { useState } from "react";


function AddDesigns(props) {

    const [designName, setDesignName] = useState(null);
    
    
    const toggle = (event) => {
        alert(designName);
        alert(event.target.id);
        if(event.target.id != designName){
            if(designName != null && document.getElementById(designName)!=null){
                document.getElementById(designName).className = "design";
            }
            setDesignName(event.target.id);
            event.target.className = "design selected";
        }
        else{
            setDesignName(null);
            event.target.className = "design";
        }
        debugger;
        props.addDesignName(event.target.id);
        
    };

    return (
        <Tabs>
        <TabList>
            <Tab>Pattern</Tab>
            <Tab>Neon</Tab>
            <Tab>Glitter</Tab>
            <Tab>Clear</Tab>
            <Tab>Solid</Tab>
            <Tab>Sport</Tab>
            <Tab>Animal</Tab>
            <Tab>Custom</Tab>
        </TabList>

        <TabPanel>
            <div className="tab-pane pattern" id="pills-pattern">
                <div className="design" onClick={(e) => toggle(e)} id="americanflag"><img src="../images/newcase/design/1.pattern/americanflag.jpg"/><span>American Flag</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="apple"><img src="../images/newcase/design/1.pattern/apple.jpg"/><span>Apple</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="baseball"><img src="../images/newcase/design/1.pattern/baseball.jpg"/><span>Baseball</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="checker" ><img src="../images/newcase/design/1.pattern/checker.jpg"/><span>Checker</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="dice" ><img src="../images/newcase/design/1.pattern/dice.jpg"/><span>Dice</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="eyes" ><img src="../images/newcase/design/1.pattern/eyes.jpg"/><span>Eyes</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="fire" ><img src="../images/newcase/design/1.pattern/fire.jpg"/><span>Fire</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="flowers" ><img src="../images/newcase/design/1.pattern/flowers.jpg"/><span>Flowers</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="forest_green" ><img src="../images/newcase/design/1.pattern/forest_green.jpg"/><span>Forest Green</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="giraffe" ><img src="../images/newcase/design/1.pattern/giraffe.jpg"/><span>Giraffe</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="kite" ><img src="../images/newcase/design/1.pattern/kite.jpg"/><span>Kite</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="ladybug" ><img src="../images/newcase/design/1.pattern/ladybug.jpg"/><span>Ladybug</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="merrygoaround" ><img src="../images/newcase/design/1.pattern/merrygoaround.jpg"/><span>Merry-go-round</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="mexicoflag" ><img src="../images/newcase/design/1.pattern/mexicoflag.jpg"/><span>Mexico Flag</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="moonlight" ><img src="../images/newcase/design/1.pattern/moonlight.jpg"/><span>Moonlight</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="rainbow" ><img src="../images/newcase/design/1.pattern/rainbow.jpg"/><span>Rainbow</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="redrose" ><img src="../images/newcase/design/1.pattern/redrose.jpg"/><span>Red Rose</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="sailboat" ><img src="../images/newcase/design/1.pattern/sailboat.jpg"/><span>Sailboat</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="soccerball" ><img src="../images/newcase/design/1.pattern/soccerball.jpg"/><span>Soccer Ball</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="strawberry" ><img src="../images/newcase/design/1.pattern/strawberry.jpg"/><span>Strawberry</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="tiedie" ><img src="../images/newcase/design/1.pattern/tiedie.jpg"/><span>Tiedie</span></div>    
                <div className="design" onClick={(e) => toggle(e)} id="tiger" ><img src="../images/newcase/design/1.pattern/tiger.jpg"/><span>Tiger</span></div>    
                <div className="design" onClick={(e) => toggle(e)} id="watermelon" ><img src="../images/newcase/design/1.pattern/watermelon.jpg"/><span>Watermelon</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="whitedots" ><img src="../images/newcase/design/1.pattern/whitedots.jpg"/><span>White Dots</span></div>    
                <div className="design" onClick={(e) => toggle(e)} id="yinyang" ><img src="../images/newcase/design/1.pattern/yinyang.jpg"/><span>Yinyang</span>
                </div>
            </div>
        </TabPanel>
        <TabPanel>
            <div className="tab-pane neon" id="pills-neon">
                <div className="design" onClick={(e) => toggle(e)} id="neon_blue" ><img src="../images/newcase/design/2.neon/neon_blue.jpg"/><span>Neon Blue</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="neon_glow_in_the dark" ><img src="../images/newcase/design/2.neon/neon_glow_in_the dark.jpg"/><span>Neon Glow In The Dark</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="neon_green" ><img src="../images/newcase/design/2.neon/neon_green.jpg"/><span>Neon Green</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="neon_orange" ><img src="../images/newcase/design/2.neon/neon_orange.jpg"/><span>Neon Orange</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="neon_pink" ><img src="../images/newcase/design/2.neon/neon_pink.jpg"/><span>Neon Pink</span></div>    
                <div className="design" onClick={(e) => toggle(e)} id="neon_purple" ><img src="../images/newcase/design/2.neon/neon_purple.jpg"/><span>Neon Purple</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="neon_rainbow" ><img src="../images/newcase/design/2.neon/neon_rainbow.jpg"/><span>Neon Rainbow</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="neon_yellow" ><img src="../images/newcase/design/2.neon/neon_yellow.jpg"/><span>Neon Yellow</span></div>
            </div>
        </TabPanel>
        <TabPanel>
            <div className="tab-pane glitter" id="pills-glitter">
                <div className="design" onClick={(e) => toggle(e)} id="gl_aqua" ><img src="../images/newcase/design/3.glitter/gl_aqua.jpg"/><span>Aqua</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="gl_blue" ><img src="../images/newcase/design/3.glitter/gl_blue.jpg"/><span>Blue</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="gl_gold" ><img src="../images/newcase/design/3.glitter/gl_gold.jpg"/><span>Gold</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="gl_light_green" ><img src="../images/newcase/design/3.glitter/gl_light_green.jpg"/><span>Light Green</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="gl_multicolor" ><img src="../images/newcase/design/3.glitter/gl_multicolor.jpg"/><span>Multi Color</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="gl_red" ><img src="../images/newcase/design/3.glitter/gl_red.jpg"/><span>Red</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="gl_stardust" ><img src="../images/newcase/design/3.glitter/gl_stardust.jpg"/><span>Stardust</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="gl_violet" ><img src="../images/newcase/design/3.glitter/gl_violet.jpg"/><span>Violet</span></div>
            </div>
        </TabPanel>
        <TabPanel>
            <div className="tab-pane clear" id="pills-clear">
                <div className="design" onClick={(e) => toggle(e)} id="cl_aqua" ><img src="../images/newcase/design/4.clear/cl_aqua.jpg"/><span>Aqua</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="cl_blue" ><img src="../images/newcase/design/4.clear/cl_blue.jpg"/><span>Blue</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="cl_clear" ><img src="../images/newcase/design/4.clear/cl_clear.jpg"/><span>Clear</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="cl_green" ><img src="../images/newcase/design/4.clear/cl_green.jpg"/><span>Green</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="cl_pink" ><img src="../images/newcase/design/4.clear/cl_pink.jpg"/><span>Pink</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="cl_purple" ><img src="../images/newcase/design/4.clear/cl_purple.jpg"/><span>Purple</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="cl_red" ><img src="../images/newcase/design/4.clear/cl_red.jpg"/><span>Red</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="cl_violet" ><img src="../images/newcase/design/4.clear/cl_violet.jpg"/><span>Violet</span></div>
            </div>
        </TabPanel>
        <TabPanel>
            <div className="tab-pane solid" id="pills-solid">
                <div className="design" onClick={(e) => toggle(e)} id="amber" ><img src="../images/newcase/design/5.solid/amber.jpg"/><span>Amber</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="black" ><img src="../images/newcase/design/5.solid/black.jpg"/><span>Black</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="brown" ><img src="../images/newcase/design/5.solid/brown.jpg"/><span>Brown</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="desert_storm" ><img src="../images/newcase/design/5.solid/desert_storm.jpg"/><span>Desert Storm</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="forest_green" ><img src="../images/newcase/design/5.solid/forest_green.jpg"/><span>Forest Green</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="midnight_purple" ><img src="../images/newcase/design/5.solid/midnight_purple.jpg"/><span>Midnight Purple</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="pink" ><img src="../images/newcase/design/5.solid/pink.jpg"/><span>Pink</span></div>
                <div className="design" onClick={(e) => toggle(e)} id="violet" ><img src="../images/newcase/design/5.solid/violet.jpg"/><span>Violet</span></div>
            </div>
        </TabPanel>
        <TabPanel>
            <div className="tab-pane sport" id="pills-sport">
                <div className="design" onClick={(e) => toggle(e)} id="sd-1" ><img src="../images/newcase/design/6.sport/sd-1.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="sd-2" ><img src="../images/newcase/design/6.sport/sd-2.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="sd-3" ><img src="../images/newcase/design/6.sport/sd-3.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="sd-4" ><img src="../images/newcase/design/6.sport/sd-4.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="sd-5" ><img src="../images/newcase/design/6.sport/sd-5.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="sd-6" ><img src="../images/newcase/design/6.sport/sd-6.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="sd-7" ><img src="../images/newcase/design/6.sport/sd-7.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="sd-8" ><img src="../images/newcase/design/6.sport/sd-8.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="sd-9" ><img src="../images/newcase/design/6.sport/sd-9.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="sd-10" ><img src="../images/newcase/design/6.sport/sd-10.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="sd-11" ><img src="../images/newcase/design/6.sport/sd-11.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="sd-12" ><img src="../images/newcase/design/6.sport/sd-12.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="sd-13" ><img src="../images/newcase/design/6.sport/sd-13.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="sd-14" ><img src="../images/newcase/design/6.sport/sd-14.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="sd-15" ><img src="../images/newcase/design/6.sport/sd-15.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="sd-16" ><img src="../images/newcase/design/6.sport/sd-16.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="sd-17" ><img src="../images/newcase/design/6.sport/sd-17.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="sd-18" ><img src="../images/newcase/design/6.sport/sd-18.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="sd-19" ><img src="../images/newcase/design/6.sport/sd-19.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="sd-20" ><img src="../images/newcase/design/6.sport/sd-20.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="sd-21" ><img src="../images/newcase/design/6.sport/sd-21.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="sd-22" ><img src="../images/newcase/design/6.sport/sd-22.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="sd-23" ><img src="../images/newcase/design/6.sport/sd-23.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="sd-24" ><img src="../images/newcase/design/6.sport/sd-24.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="sd-25" ><img src="../images/newcase/design/6.sport/sd-25.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="sd-26" ><img src="../images/newcase/design/6.sport/sd-26.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="sd-27" ><img src="../images/newcase/design/6.sport/sd-27.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="sd-28" ><img src="../images/newcase/design/6.sport/sd-28.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="sd-29" ><img src="../images/newcase/design/6.sport/sd-29.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="sd-30" ><img src="../images/newcase/design/6.sport/sd-30.jpg"/></div>
            </div>
        </TabPanel>
        <TabPanel>
            <div className="tab-pane animal" id="pills-animal">
                <div className="design" onClick={(e) => toggle(e)} id="ad-1"><img src="../images/newcase/design/7.animal/ad-1.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="ad-2"><img src="../images/newcase/design/7.animal/ad-2.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="ad-3"><img src="../images/newcase/design/7.animal/ad-3.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="ad-4"><img src="../images/newcase/design/7.animal/ad-4.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="ad-5"><img src="../images/newcase/design/7.animal/ad-5.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="ad-6"><img src="../images/newcase/design/7.animal/ad-6.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="ad-7"><img src="../images/newcase/design/7.animal/ad-7.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="ad-8"><img src="../images/newcase/design/7.animal/ad-8.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="ad-9"><img src="../images/newcase/design/7.animal/ad-9.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="ad-10"><img src="../images/newcase/design/7.animal/ad-10.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="ad-11"><img src="../images/newcase/design/7.animal/ad-11.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="ad-12"><img src="../images/newcase/design/7.animal/ad-12.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="ad-13"><img src="../images/newcase/design/7.animal/ad-13.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="ad-14"><img src="../images/newcase/design/7.animal/ad-14.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="ad-15"><img src="../images/newcase/design/7.animal/ad-15.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="ad-16"><img src="../images/newcase/design/7.animal/ad-16.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="ad-17"><img src="../images/newcase/design/7.animal/ad-17.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="ad-18"><img src="../images/newcase/design/7.animal/ad-18.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="ad-19"><img src="../images/newcase/design/7.animal/ad-19.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="ad-20"><img src="../images/newcase/design/7.animal/ad-20.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="ad-21"><img src="../images/newcase/design/7.animal/ad-21.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="ad-22"><img src="../images/newcase/design/7.animal/ad-22.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="ad-23"><img src="../images/newcase/design/7.animal/ad-23.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="ad-24"><img src="../images/newcase/design/7.animal/ad-24.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="ad-25"><img src="../images/newcase/design/7.animal/ad-25.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="ad-26"><img src="../images/newcase/design/7.animal/ad-26.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="ad-27"><img src="../images/newcase/design/7.animal/ad-27.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="ad-28"><img src="../images/newcase/design/7.animal/ad-28.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="ad-29"><img src="../images/newcase/design/7.animal/ad-29.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="ad-30"><img src="../images/newcase/design/7.animal/ad-30.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="ad-31"><img src="../images/newcase/design/7.animal/ad-31.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="ad-32"><img src="../images/newcase/design/7.animal/ad-32.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="ad-33"><img src="../images/newcase/design/7.animal/ad-33.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="ad-34"><img src="../images/newcase/design/7.animal/ad-34.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="ad-35"><img src="../images/newcase/design/7.animal/ad-35.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="ad-36"><img src="../images/newcase/design/7.animal/ad-36.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="ad-37"><img src="../images/newcase/design/7.animal/ad-37.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="ad-38"><img src="../images/newcase/design/7.animal/ad-38.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="ad-39"><img src="../images/newcase/design/7.animal/ad-39.jpg"/></div>
                <div className="design" onClick={(e) => toggle(e)} id="ad-40"><img src="../images/newcase/design/7.animal/ad-40.jpg"/></div>
            </div>
        </TabPanel>
        <TabPanel>
            <div className="tab-pane custom" id="pills-custom">
                <div className="design" onClick={(e) => toggle(e)}  id="custom"><img src="../images/newcase/design/8.custom/custom.jpg"/><span></span></div>
            </div>
        </TabPanel>    
    </Tabs>
    );
}
  
export default AddDesigns;