

// import React, {Component} from 'react'
// Define class here
class HTMLElement {

    constructor (tag, content){
      this.tag = tag;
      this.content = content;
    }

    render(){
        return `<${tag}> ${content} </${tag}`;
    }
}
// Export class here
export default  class HTMLElement {};
