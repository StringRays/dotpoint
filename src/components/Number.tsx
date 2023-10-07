import { useRef, useEffect } from 'react'
import'../index.css';

type NumberProps = {
    num: number;
    size: string;
    key?: string;
}

const Number = ({ num, size }: NumberProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const circleRadius = 6;
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d'); 
            if (context){
                //this makes sure context clears first - was drawing numbers on top of eachother before
                context.clearRect(0, 0, 100, 100);
                context.lineWidth = 6;
            switch(num){
                case 0:
                    context.beginPath();
                    context.fillStyle = "black";
                    context.ellipse(50, 57, 20, 37, 0, 0, 2 * Math.PI);
                    context.stroke();
                    break;
                case 1:
                    context.beginPath();
                    context.fillStyle = "black";
                    context.moveTo(50, 20);
                    context.lineTo(50, 94);
                    context.stroke();  
                    context.beginPath();
                    context.arc(50, 20, circleRadius, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    break;
                case 2:
                    context.beginPath();
                    context.fillStyle = "black";
                    context.moveTo(68, 90);
                    context.lineTo(32, 90);
                    context.quadraticCurveTo(63.7, 59, 68.4, 38); 
                    context.quadraticCurveTo(68.3, 36.5, 67.7, 35);
                    context.stroke();
                    context.beginPath();
                    context.arc(50, 38, 18, 1.1 * Math.PI, .2 * Math.PI);
                    context.stroke();
                    context.beginPath();
                    context.beginPath();
                    context.arc(70, 90, circleRadius, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    context.beginPath();
                    context.arc(32, 38, circleRadius, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    break;
                case 3:
                    context.beginPath();
                    context.fillStyle = "black";
                    context.arc(50, 38, 18, 1.1 * Math.PI, .6 * Math.PI);
                    context.stroke();
                    context.beginPath();
                    context.arc(50, 76, 18, 1.4 * Math.PI, .9 * Math.PI);
                    context.stroke();  
                    context.beginPath();
                    context.arc(44, 56, circleRadius, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    context.beginPath();
                    context.arc(34, 28, circleRadius, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    context.beginPath();
                    context.arc(34, 82, circleRadius, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    break;
                case 4:  
                    context.beginPath();
                    context.fillStyle = "black";
                    context.moveTo(68, 24);
                    context.lineTo(68, 94);  
                    context.stroke();
                    context.beginPath();
                    context.moveTo(68, 56);
                    context.lineTo(32, 56);  
                    context.lineTo(32, 24); 
                    context.stroke();
                    context.beginPath();
                    context.arc(32, 56, circleRadius, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    context.beginPath();
                    context.arc(68, 26, circleRadius, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    context.beginPath();
                    context.arc(68, 56, circleRadius, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    context.beginPath();
                    context.arc(32, 26, circleRadius, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    break;
                case 5:
                    context.beginPath();
                    context.fillStyle = "black";
                    context.moveTo(50, 52);
                    context.lineTo(32, 52);  
                    context.lineTo(32, 24);
                    context.lineTo(68, 24); 
                    context.stroke();
                    context.beginPath();
                    context.ellipse(50, 74, 18, 22, 0, 1.5 * Math.PI, .95 * Math.PI);
                    context.stroke();
                    context.beginPath();
                    context.arc(32, 52, circleRadius, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    context.beginPath();
                    context.arc(68, 26, circleRadius, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    context.beginPath();
                    context.arc(66, 60, circleRadius, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    context.beginPath();
                    context.arc(32, 26, circleRadius, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    context.beginPath();
                    context.arc(32, 78, circleRadius, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    break;
                case 6:
                    context.beginPath();
                    context.fillStyle = "black";
                    context.arc(50, 76, 18, 0, 2 * Math.PI);
                    context.stroke();
                    context.beginPath();
                    context.moveTo(32, 76);
                    context.quadraticCurveTo(32, 26, 68, 26);
                    context.stroke();
                    context.beginPath();
                    context.fillStyle = "white";
                    context.arc(34, 64, circleRadius, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    context.beginPath();
                    context.arc(68, 26, circleRadius, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    context.beginPath();
                    context.arc(69, 78, circleRadius, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    break;
                case 7:
                    context.beginPath();
                    context.fillStyle = "black";
                    context.moveTo(32, 24);
                    context.lineTo(68, 24); 
                    context.lineTo(42, 90); 
                    context.stroke();
                    context.beginPath();
                    context.fillStyle = "white";
                    context.arc(68, 24, circleRadius, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    context.beginPath();
                    context.arc(55, 54, circleRadius, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    context.beginPath();
                    context.arc(42, 90, circleRadius, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    context.fillStyle = "black";
                    context.beginPath();
                    context.arc(32, 24, circleRadius, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    break;
                case 8:
                    context.beginPath();
                    context.fillStyle = "black";
                    context.arc(50, 38, 18, 0, 2 * Math.PI);
                    context.stroke();  
                    context.beginPath();
                    context.arc(50, 76, 18, 0, 2 * Math.PI);
                    context.stroke();  
                    context.beginPath();
                    context.fillStyle = "white";
                    context.arc(66, 35, circleRadius, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    context.beginPath();
                    context.arc(34, 35, circleRadius, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    context.beginPath();
                    context.arc(69, 78, circleRadius, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    context.beginPath();
                    context.arc(31, 78, circleRadius, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    break;
                case 9:
                    context.beginPath();
                    context.fillStyle = "black";
                    context.arc(50, 38, 18, 0, 2 * Math.PI);
                    context.stroke();  
                    context.beginPath();
                    context.moveTo(68, 24);
                    context.lineTo(68, 94);  
                    context.stroke();
                    context.beginPath();
                    context.arc(38, 52, circleRadius, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    context.beginPath();
                    context.fillStyle = "white";
                    context.arc(68, 26, circleRadius, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    context.beginPath();
                    context.arc(68, 50, circleRadius, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    context.beginPath();
                    context.arc(68, 90, circleRadius, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    context.beginPath();
                    context.arc(36, 26, circleRadius, 0, 2 * Math.PI);
                    context.stroke();  
                    context.fill();
                    break;
                default: 
                    break;
                }
            }
/*
the following works with default font, 
I just wanted numbers that were blockier 
than most websafe fonst I could find
*/
        // if (canvasRef.current) {
        //     const display = num.toString();
        //     const canvas = canvasRef.current;
        //     const context = canvas.getContext('2d'); 
        //     if (context){
        //     const halfWidthNum = context.measureText(display).width/2;
        //     context && context.clearRect(0, 0, 100, 100);
        //         if (context.font){
        //             context.font = context.font.replace(/\d+px/, "100px");
        //         }
        //     if (halfWidthNum){
        //         context.fillStyle="black";
        //         context.fillText(display, 50-halfWidthNum, 90);
        //     }
        //     switch(num){
        //         case 1:
        //             context.beginPath();
        //             context.fillStyle = "black";
        //             context.arc(34, 39, 8, 0, 2 * Math.PI);
        //             context.stroke();  
        //             context.fill();
        //             break;
        //         case 2:
        //             context.beginPath();
        //             context.fillStyle = "black";
        //             context.arc(30, 37, 8, 0, 2 * Math.PI);
        //             context.stroke();  
        //             context.fill();
        //             context.beginPath();
        //             context.fillStyle = "black";
        //             context.arc(74, 85, 8, 0, 2 * Math.PI);
        //             context.stroke();  
        //             context.fill();
        //             break;
        //         case 3:
        //             context.beginPath();
        //             context.fillStyle = "black";
        //             context.arc(30, 36, 8, 0, 2 * Math.PI);
        //             context.stroke();  
        //             context.fill();
        //             context.beginPath();
        //             context.arc(44, 52, 8, 0, 2 * Math.PI);
        //             context.stroke();  
        //             context.fill();
        //             context.beginPath();
        //             context.arc(30, 73, 8, 0, 2 * Math.PI);
        //             context.stroke();  
        //             context.fill();
        //             break;
        //         case 4:
        //             context.beginPath();
        //             context.fillStyle = "black";
        //             context.arc(58, 18, 8, 0, 2 * Math.PI);
        //             context.stroke();  
        //             context.fill();
        //             context.beginPath();
        //             context.arc(72, 68, 8, 0, 2 * Math.PI);
        //             context.stroke();  
        //             context.fill();
        //             context.beginPath();
        //             context.arc(25, 68, 8, 0, 2 * Math.PI);
        //             context.stroke();  
        //             context.fill();
        //             context.beginPath();
        //             context.arc(58, 87, 8, 0, 2 * Math.PI);
        //             context.stroke();  
        //             context.fill();
        //             break;
        //         case 5:
        //             context.beginPath();
        //             context.fillStyle = "black";
        //             context.arc(34, 23, 8, 0, 2 * Math.PI);
        //             context.stroke();  
        //             context.fill();
        //             context.beginPath();
        //             context.arc(70, 68, 8, 0, 2 * Math.PI);
        //             context.stroke();  
        //             context.fill();
        //             context.beginPath();
        //             context.arc(30, 72, 8, 0, 2 * Math.PI);
        //             context.stroke();  
        //             context.fill();
        //             context.beginPath();
        //             context.arc(72, 23, 8, 0, 2 * Math.PI);
        //             context.stroke();  
        //             context.fill();
        //             context.beginPath();
        //             context.arc(32, 50, 8, 0, 2 * Math.PI);
        //             context.stroke();  
        //             context.fill();
        //             break;
        //         case 6:
        //             context.beginPath();
        //             context.fillStyle = "white";
        //             context.arc(68, 32, 8, 0, 2 * Math.PI);
        //             context.stroke();  
        //             context.fill();
        //             context.beginPath();
        //             context.arc(72, 64, 8, 0, 2 * Math.PI);
        //             context.stroke();  
        //             context.fill();
        //             context.beginPath();
        //             context.arc(29, 64, 8, 0, 2 * Math.PI);
        //             context.stroke();  
        //             context.fill();
        //             break;
        //         case 7:
        //             context.beginPath();
        //             context.fillStyle = "white";
        //             context.arc(72, 24, 8, 0, 2 * Math.PI);
        //             context.stroke();  
        //             context.fill();
        //             context.beginPath();
        //             context.arc(51, 54, 8, 0, 2 * Math.PI);
        //             context.stroke();  
        //             context.fill();
        //             context.beginPath();
        //             context.arc(42, 88, 8, 0, 2 * Math.PI);
        //             context.stroke();  
        //             context.fill();
        //             context.fillStyle = "black";
        //             context.beginPath();
        //             context.arc(30, 24, 8, 0, 2 * Math.PI);
        //             context.stroke();  
        //             context.fill();
        //             break;
        //         case 8:
        //             context.beginPath();
        //             context.fillStyle = "white";
        //             context.arc(66, 35, 8, 0, 2 * Math.PI);
        //             context.stroke();  
        //             context.fill();
        //             context.beginPath();
        //             context.arc(34, 35, 8, 0, 2 * Math.PI);
        //             context.stroke();  
        //             context.fill();
        //             context.beginPath();
        //             context.arc(70, 70, 8, 0, 2 * Math.PI);
        //             context.stroke();  
        //             context.fill();
        //             context.beginPath();
        //             context.arc(30, 70, 8, 0, 2 * Math.PI);
        //             context.stroke();  
        //             context.fill();
        //             break;
        //         case 9:
        //             context.beginPath();
        //             context.fillStyle = "white";
        //             context.arc(68, 46, 8, 0, 2 * Math.PI);
        //             context.stroke();  
        //             context.fill();
        //             context.beginPath();
        //             context.arc(50, 21, 8, 0, 2 * Math.PI);
        //             context.stroke();  
        //             context.fill();
        //             context.beginPath();
        //             context.arc(60, 84, 8, 0, 2 * Math.PI);
        //             context.stroke();  
        //             context.fill();
        //             context.beginPath();
        //             context.arc(30, 70, 8, 0, 2 * Math.PI);
        //             context.stroke();  
        //             context.fill();
        //             context.beginPath();
        //             context.fillStyle = "black";
        //             context.arc(30, 44, 8, 0, 2 * Math.PI);
        //             context.stroke();  
        //             context.fill();
        //             break;
        //         default: 
        //             break;
        //         }
        //     }
        }       
    },[num]);

    return <canvas className={size} ref={canvasRef} height="100px" width="100px" data-cy={num} />;
}
export default Number;