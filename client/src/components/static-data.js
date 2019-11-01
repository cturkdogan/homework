const shortid = require("shortid"); // shortid.generate() returns a unique "short" id
const txtgen = require("txtgen"); // txtgen.sentence() returns random "readable" sentences
const faker = require("faker"); // faker is used for generating random fake data.
const _ = require("lodash"); // lodash is a utility lib for Javascript

// const menus = generateMenus();
// export const items = _.mapKeys(menus, "menu_id");


const menus = generateMenus();
export const items = menus.slice(0);
items.sort(function (a,b){
  let x = a.menu_id;
  let y = b.menu_id;
  return x < y ? -1 : x > y ? 1 : 0;;
});


export const getMessages = messagesPerMenu => {
  let messages = {};
  _.forEach(menus, menu => {
    messages[menu.menu_id] = {
      ..._.mapKeys(generateMsgs(messagesPerMenu), "number")
    };
  });
  return messages;
};

// just an example of how the state object is structured
export const state = {
  menu: generateMenu(),
  messages: getMessages(10),
  typing: "",
  items,
  activeMenuId: null
};

/**
 * @returns {Object} - a new menu object
 */
/*export function generateMenu() {
  let array = [1,2,3,4,5,6,7,8,9,10];
  let title = ["Menu 1", "Menu 2", "Menu 3"];
  let subMenu = ["Menu 1.1", "Menu 1.2", "Menu 2.1"];
  
  return {
    menu_id: shortid.generate(),
    title: title,
    parentId: null,
	  isActive: true,
    page: {
      title: "Page 1",
      text: txtgen.sentence()
    },
    subMenu: subMenu
  }} */

  export function generateMenu(){
    let menu = {
      menu_id: "1",
      label: "Menu 1",      
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
      label: "Menu 1",      
      value: "Secure data sharing and collaboration among partners => Blockchain corruption cyber attack Decarbonization => emission reduction goals, carbon neutral fuels, optimized logistic chains Safe seafare => Shipping 4.0  autonomous shipping, human error New business models: blockchain => verticals feeding on shipping data",
      title: "Marine Industry Problems", 
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
    }    
  ];
    return menu;
  }

  
/**
 * @returns {Object} - a new message object
 */
function generateMsg(number) {
  return {
    number,
    text: txtgen.sentence(),
    is_menu_msg: faker.random.boolean()
  };
}
/**
 *
 * @param {Number} numberOfMenus - the number of menus to be generated
 * @param {Function} generateMenu - function that generates a single menu
 * @returns {Array} - an array of menu objects with length n = numberOfMenus
 */
/*function generateMenus(numberOfMenus) {
  return Array.from({ length: numberOfMenus }, () => generateMenu());
} */

function generateMsgs(numberOfMsgs) {
  return Array.from({ length: numberOfMsgs }, (v, i) => generateMsg(i));
}