
import React, {Component} from "react"
import "./bg-fader.scss"

export default class BgFader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex:0,
            image_top:{
                class:"old_slide",
                src:this.props.images[0].image               
            },
            image_bottom:{
                class:"",
                src:this.props.images[1].image   
            }
        }
    }
    componentDidMount() {
        this.initListener()
    }
    nextSlide = () => {
        let self = this
        let newIndex = this.state.currentIndex===this.props.images.length ? 0 : this.state.currentIndex+1
        this.setState({
            currentIndex : newIndex,
            image_top:{
                class:"old_slide",
                src:this.state.image_bottom.src               
            },
            image_bottom:{
                class:"",
                src:this.props.images[newIndex].image    
            }
        })
        setTimeout(() => {
            self.setState({image_bottom: { class:"incoming_slide"}})
            self.initListener();
        }, 500);
    }
    initListener = () => {
        let el = document.getElementById("bg-image-1")
        el.addEventListener(this.cssTransitions(), e => {
            if (e.propertyName === "opacity") {
                this.nextSlide();
            }
        });
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
        return(
            <div className="bg-fader">
                <div className={"bg-image " + this.state.image_top.class} id={"bg-image-0"} key={"bg-image-0"} style={{backgroundImage:"url('"+this.state.image_top.src+"')"}}></div>
                <div className={"bg-image " + this.state.image_bottom.class} id={"bg-image-1"} key={"bg-image-1"}  style={{backgroundImage:"url('"+this.state.image_bottom.src+"')"}}></div>
            </div>
        )
    }
}
