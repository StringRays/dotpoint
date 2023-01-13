import { useRef, useEffect } from 'react'
import { NumberProps } from './types/numbers';

const Number = ({ num }: NumberProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const display = num.toString();
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d'); 
            if (context){
            const halfWidthNum = context.measureText(display).width/2;
            context && context.clearRect(0, 0, 100, 100);
                if (context.font){
                    context.font = context.font.replace(/\d+px/, "100px");
                }
            if (halfWidthNum){
                context.fillStyle="black";
                context.fillText(display, 50-halfWidthNum, 90);
            }
            switch(num){
                case 1:
                    context.beginPath();
                    context.fillStyle = "black";
                    context.arc(34, 39, 8, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    break;
                case 2:
                    context.beginPath();
                    context.fillStyle = "black";
                    context.arc(30, 37, 8, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    context.beginPath();
                    context.fillStyle = "black";
                    context.arc(74, 85, 8, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    break;
                case 3:
                    context.beginPath();
                    context.fillStyle = "black";
                    context.arc(30, 36, 8, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    context.beginPath();
                    context.arc(44, 52, 8, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    context.beginPath();
                    context.arc(30, 73, 8, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    break;
                case 4:
                    context.beginPath();
                    context.fillStyle = "black";
                    context.arc(58, 18, 8, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    context.beginPath();
                    context.arc(72, 68, 8, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    context.beginPath();
                    context.arc(25, 68, 8, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    context.beginPath();
                    context.arc(58, 87, 8, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    break;
                case 5:
                    context.beginPath();
                    context.fillStyle = "black";
                    context.arc(34, 23, 8, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    context.beginPath();
                    context.arc(70, 68, 8, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    context.beginPath();
                    context.arc(30, 72, 8, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    context.beginPath();
                    context.arc(72, 23, 8, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    context.beginPath();
                    context.arc(32, 50, 8, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    break;
                case 6:
                    context.beginPath();
                    context.fillStyle = "white";
                    context.arc(68, 32, 8, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    context.beginPath();
                    context.arc(72, 64, 8, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    context.beginPath();
                    context.arc(29, 64, 8, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    break;
                case 7:
                    context.beginPath();
                    context.fillStyle = "white";
                    context.arc(72, 24, 8, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    context.beginPath();
                    context.arc(51, 54, 8, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    context.beginPath();
                    context.arc(42, 88, 8, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    context.fillStyle = "black";
                    context.beginPath();
                    context.arc(30, 24, 8, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    break;
                case 8:
                    context.beginPath();
                    context.fillStyle = "white";
                    context.arc(66, 35, 8, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    context.beginPath();
                    context.arc(34, 35, 8, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    context.beginPath();
                    context.arc(70, 70, 8, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    context.beginPath();
                    context.arc(30, 70, 8, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    break;
                    case 9:
                        context.beginPath();
                        context.fillStyle = "white";
                        context.arc(68, 46, 8, 0, 2 * Math.PI);
                        context.stroke();  
                        context.fill();
                        context.beginPath();
                        context.arc(50, 21, 8, 0, 2 * Math.PI);
                        context.stroke();  
                        context.fill();
                        context.beginPath();
                        context.arc(60, 84, 8, 0, 2 * Math.PI);
                        context.stroke();  
                        context.fill();
                        context.beginPath();
                        context.arc(30, 70, 8, 0, 2 * Math.PI);
                        context.stroke();  
                        context.fill();
                        context.beginPath();
                        context.fillStyle = "black";
                        context.arc(30, 44, 8, 0, 2 * Math.PI);
                        context.stroke();  
                        context.fill();
                        break;
                default: 
                    break;
                }
            }
        }       
    },[num]);

    return <canvas ref={canvasRef} height={100} width={100} />;
}
export default Number