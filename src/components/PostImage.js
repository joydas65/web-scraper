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
        var transparentImage = new Image();
        
        const title = this.props.quote

        img.onload = function() {
            ctx.drawImage(img, 0, 0, 1080, 1080);

            // const my_gradient = ctx.createLinearGradient(0, 0, 0, 800);
            // my_gradient.addColorStop(0, "white");
            // my_gradient.addColorStop(1, "black");
            // //ctx.globalCompositeOperation = 'xor'
            // ctx.fillStyle = my_gradient;
            // ctx.fillRect(0, 680, 1080, 400)

            // ctx.shadowBlur = 30;
            // ctx.shadowColor = "white";
            // ctx.fillStyle = "black";
            // ctx.fillRect(0, 670, 1080, 410);
            // ctx.shadowColor = "white";
            // ctx.shadowBlur = 6;
            // ctx.shadowOffsetY = -26;

            ctx.beginPath()
            ctx.rect(0, 760, 1080, 320)
            ctx.fillStyle = "black"
            // ctx.shadowBlur = 20
            // ctx.shadowColor = "black"
            //ctx.globalAlpha = 0.3
            ctx.fill()

            ctx.font = '34px myfont'
            ctx.textAlign = 'center'
            ctx.fillStyle = '#fff'
            ctx.fillText(title, 540, 950)
            
            ctx.beginPath()
            //ctx.lineWidth = "4"
            //ctx.strokeStyle = "#fff"
            ctx.rect(485, 790, 120, 60)
            ctx.fillStyle = "#fff";
            ctx.fill()
            //ctx.stroke()

            ctx.font = '55px myfont'
            ctx.textAlign = 'center'
            ctx.fillStyle = '#000'
            ctx.fillText('NEWS', 544, 842)
            
        };
        img.src = this.props.item

        // transparentImage.onload = function() {
        //     ctx.drawImage(transparentImage, 0, 720, 1080, 40)
        // };
        // transparentImage.src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwoRCgkFBQoFBQUFCg8ICQUKFBEWFhQRExMYHCggGBolGxMTITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAK0BIwMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAABAMCAQf/xAAWEAEBAQAAAAAAAAAAAAAAAAAAExL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+26NMdmwbaNMdmwbaNMdmwbaNMdmwbaNMdmwbaNMdmwbaNMdmwbaNMdmwbaNMdmwbaNMdmwbaNMdmwbaNMdmwbaNMdmwbaNMdmwbaNMdmwbaNMdmwbaNMdmwbaNMdmwbaGO3gMNm02zYKdm02zYKdm02zYKdm02zYKdm02zYKdm02zYKdm02zYKdm02zYKdm02zYKdm02zYKdm02zYKdm02zYKdm02zYKdm02zYKdm02zYKdm02zYKdm02zYKdm02zYKdibYCWhRLQoCqhRLQoCqhRLQoCqhRLQoCqhRLQoCqhRLQoCqhRLQoCqhRLQoCqhRLQoCqhRLQoCqhRLQoCqhRLQoCqhRLQoCqhRLQoCqhRLQoCqhRLQoCqhRLQoCqhRLQoCqgloAjoUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroJKPQRVKoalQXVKoalQXVKoalQXVKoalQXVKoalQXVKoalQXVKoalQXVKoalQXVKoalQXVKoalQXVKoalQXVKoalQXVKoalQXVKoalQXVKoalQXVKoalQXVKoalQXVKoalQXVeIqvQRVKoqlQW1KoqlQW1KoqlQW1KoqlQW1KoqlQW1KoqlQW1KoqlQW1KoqlQW1KoqlQW1KoqlQW1KoqlQW1KoqlQW1KoqlQW1KoqlQW1KoqlQW1KoqlQW1KoqlQW1KoqlQW1eI6gIalUVSoLalUVSoLalUVSoLalUVSoLalUVSoLalUVSoLalUVSoLalUVSoLalUVSoLalUVSoLalUVSoLalUVSoLalUVSoLalUVSoLalUVSoLalUVSoLalUVSoLalUVSoLaiKoCKpVFUqC2pVFUqC2pVFUqC2pVFUqC2pVFUqC2pVFUqC2pVFUqC2pVFUqC2pVFUqC2pVFUqC2pVFUqC2pVFUqC2pVFUqC2pVFUqC2pVFUqC2pVFUqC2pVFUqC2pVFUqC2oiq9BFQokoUBXQokoUBXQokoUBXQokoUBXQokoUBXQokoUBXQokoUBXQokoUBXQokoUBXQokoUBXQokoUBXQokoUBXQokoUBXQokoUBXQokoUBXQokoUBXQokoUBXQokoUBXQSUASUKJdmwVUKJdmwVUKJdmwVUKJdmwVUKJdmwVUKJdmwVUKJdmwVUKJdmwVUKJdmwVUKJdmwVUKJdmwVUKJdmwVUKJdmwVUKJdmwVUKJdmwVUKJdmwVUKJdmwVUKJdmwVUEu3gMdGnIDrRpyA60acgOtGnIDrRpyA60acgOtGnIDrRpyA60acgOtGnIDrRpyA60acgOtGnIDrRpyA60acgOtGnIDrRpyA60acgOtPXAD//2Q=="
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