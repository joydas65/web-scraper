import React from 'react'
import './PostImage.css'

class PostImage extends React.Component {
    constructor(props){
        super(props)
        this.canvasRef = React.createRef()
        this.imageRef = React.createRef()
    }
    componentDidMount() {
        const canvas = this.canvasRef.current
        const ctx = canvas.getContext("2d")

        var img = new Image();
        
        const title = this.props.quote

        img.onload = function() {
            ctx.drawImage(img, 0, 0, 1080, 1080);

            const my_gradient = ctx.createLinearGradient(0, 0, 0, 800);
            my_gradient.addColorStop(0, "transparent");
            my_gradient.addColorStop(1, "black");
            //ctx.globalCompositeOperation = 'xor'
            ctx.fillStyle = my_gradient;
            ctx.fillRect(0, 680, 1080, 400)

            ctx.font = '33px myfont'
            ctx.textAlign = 'center'
            ctx.fillStyle = '#fff'
            ctx.fillText(title, 540, 950)
            
            ctx.beginPath()
            ctx.rect(485, 790, 120, 60)
            ctx.fillStyle = "#fff";
            ctx.fill()

            ctx.font = '54px myfont'
            ctx.textAlign = 'center'
            ctx.fillStyle = '#000'
            ctx.fillText('NEWS', 544, 842)
            
        };
        img.src = this.props.item
    }
    render() {
        return (
            <div className="container">
                <canvas ref={this.canvasRef} width={1080} height={1080} />
                <br/><br/>
            </div>
        )
    }
}

export default PostImage