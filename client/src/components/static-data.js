const shortid = require("shortid"); // shortid.generate() returns a unique "short" id
const txtgen = require("txtgen"); // txtgen.sentence() returns random "readable" sentences
const faker = require("faker"); // faker is used for generating random fake data.
const _ = require("lodash"); // lodash is a utility lib for Javascript



const menus = generateMenus();
export const items = menus.slice(0);
items.sort(function (a,b){
  let x = a.menu_id;
  let y = b.menu_id;
  return x < y ? -1 : x > y ? 1 : 0;;
});

export function generateMenu(){
    let menu = {
      menu_id: "1",
      label: "Static Menu 1",      
      value: "Secure data sharing and collaboration among partners => Blockchain corruption cyber attack Decarbonization => emission reduction goals, carbon neutral fuels, optimized logistic chains Safe seafare => Shipping 4.0  autonomous shipping, human error New business models: blockchain => verticals feeding on shipping data",
      title: "Marine Industry Problems",
      parent_id: null,
      children: [{
        menu_id: "1.1",
        label: "Menu 1.1",      
        value: "1.1",        
        title: txtgen.sentence(),
        parent_id: "1"
      },]
    }
    return menu;
  }

  export function generateMenus(){
    let menu = [{
      menu_id: "1",
      label: "Static Menu 1",      
      value: "Secure data sharing and collaboration among partners => Blockchain corruption cyber attack Decarbonization => emission reduction goals, carbon neutral fuels, optimized logistic chains Safe seafare => Shipping 4.0  autonomous shipping, human error New business models: blockchain => verticals feeding on shipping data",
      title: "Marine Industry Problems Static", 
      parent_id: null,
      children: [{
        menu_id: "1.1",
        label: "Menu 1.1",      
        value: txtgen.sentence(),
        title: txtgen.sentence(),
        parent_id: "1"
        
      },]
    },
    {
      menu_id: "2",
      label: "Menu 2",    
      value: "Sensors Autonomous vehicles and equipment Drones 3D printing IOT and Cloud Augmented Reality, VR, Digital twin ‘Learn (AR and VR), Train (VR), Perform (AR) Digital simulation",
      title: "Industry 4.0 notes", 
      parent_id: null,
      children: [{
        menu_id: "2.1",
        label: "Menu 2.1",      
        value: txtgen.sentence(),        
        title: txtgen.sentence(),
        parent_id: "2"
      },]
    },
    {
      menu_id: "2.1",
      label: "Menu 2.1",    
      value: txtgen.sentence(),
      title: "Other Menu", 
      parent_id: "2",
      children: [{
        menu_id: "2.1.1",
        label: "Menu 2.1.1",      
        value: txtgen.sentence(),        
        title: txtgen.sentence(),
        parent_id: "2"
      },]
    }    
  ];
    return menu;
  }

