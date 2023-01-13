import { useRef, useEffect } from 'react'
import { OperatorProps } from './types/canvas';
import'./index.css';

const Operator = ({ symbol, size }: OperatorProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    
    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d'); 
            if(context){
                context.lineWidth = 5;
                context.fillStyle = "black";
                switch(symbol){
                    case "+":
                        context.beginPath();
                        context.moveTo(80, 180);
                        context.lineTo(60, 180);
                        context.stroke();
                        context.beginPath();
                        context.moveTo(70, 190);
                        context.lineTo(70, 170);
                        context.stroke();
                        break;
                    case "-":
                        context.beginPath();
                        context.moveTo(80, 180);
                        context.lineTo(60, 180);
                        context.stroke();
                        break;
                    case "x":
                        context.beginPath();
                        context.moveTo(80, 170);
                        context.lineTo(60, 190);
                        context.stroke();
                        context.beginPath();
                        context.moveTo(80, 190);
                        context.lineTo(60, 170);
                        context.stroke();
                        break;
                    case "/":
                        context.beginPath();
                        context.moveTo(84, 180);
                        context.lineTo(56, 180);
                        context.stroke();
                        context.beginPath();
                        context.arc(70, 170, 1, 0, 2 * Math.PI);
                        context.stroke();  
                        context.fill();
                        context.beginPath();
                        context.arc(70, 190, 1, 0, 2 * Math.PI);
                        context.stroke();  
                        context.fill();
                        break;
                    case "=":
                        context.beginPath();
                        context.moveTo(80, 175);
                        context.lineTo(60, 175);
                        context.stroke();
                        context.beginPath();
                        context.moveTo(80, 185);
                        context.lineTo(60, 185);
                        context.stroke();
                        break;
                    default: 
                        break;
                }
            }
        }
    }, [symbol])
    return <canvas className={size} ref={canvasRef} height="200px" width="100px" />;
};

export default Operator;