
import React, { Component } from "react"
import "./bg-fader.scss"

export default class BgFader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0,
            image_top: {
                class: "starting_slide",
                src: this.props.images[0].url
            },
            image_bottom: {
                class: "old_slide",
                src: this.props.images[1].url
            }
        }
    }
    componentDidMount() {
        this.initListeners()
        setTimeout(this.nextSlide,10000)   
    }
    nextSlide = () => {
        
        let newIndex = this.state.currentIndex === this.props.images.length - 1 ? 0 : this.state.currentIndex + 1
        let newImage = {
            class: "",
            src: this.props.images[newIndex].url
        }
        let newState = {}
        let timerFunc = null;
        if (this.state.image_top.class === "old_slide") {
            newState = {
                currentIndex: newIndex,
                image_top: newImage,
                image_bottom: {
                    class: "old_slide",
                    src: this.state.image_bottom.src
                }
            }
            timerFunc = () => { this.setState({image_top:{src:this.state.image_top.src,class:"incoming_slide"}}) }
        }
        else {
            newState = {
                currentIndex: newIndex,
                image_bottom: newImage,
                image_top: {
                    class: "old_slide",
                    src: this.state.image_top.src
                }
            }
            timerFunc = () => { this.setState({image_bottom:{src:this.state.image_bottom.src,class:"incoming_slide"}}) }
        }
       
        this.setState(newState)
        setTimeout(timerFunc,5000)
    }
    initListeners = () => {
        let els = [document.getElementById("bg-image-0"), document.getElementById("bg-image-1")]
        let self = this
        els.forEach(el => {
            el.addEventListener(self.cssTransitions(), e => {
                if (e.propertyName === "opacity" && e.target.classList.contains("incoming_slide")) {
                    setTimeout(self.nextSlide,5000)
                }
            })
        })

    }
    cssTransitions = () => {
        let el = document.createElement('fakeelement');
        let transitions = {
            'transition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'MozTransition': 'transitionend',
            'WebkitTransition': 'webkitTransitionEnd'
        }

        for (let t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t];
            }
        }
    }
    render() {
        return (
            <div className="bg-fader">
                <div className={"bg-image " + this.state.image_top.class} id={"bg-image-0"} key={"bg-image-0"} style={{ backgroundImage: "url('" + this.state.image_top.src + "')" }}></div>
                <div className={"bg-image " + this.state.image_bottom.class} id={"bg-image-1"} key={"bg-image-1"} style={{ backgroundImage: "url('" + this.state.image_bottom.src + "')" }}></div>
            </div>
        )
    }
}
