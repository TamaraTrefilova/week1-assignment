// Import HTMLElement here
import HTMLElement from './HTMLElement.js'
// Define class here

class DivElement extends HTMLElement {
    constructor(content){
        super(content);
    }

    render(){
        return `<div> ${content} </div>`;
    }
}

// Export class here
export default class DivElement{};