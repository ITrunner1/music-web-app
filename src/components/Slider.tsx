'use client';

import * as NextUiSlider from "@nextui-org/react"

interface SliderProps {
    value?: number;  
    onChange?: (value: number | number[]) => void;  
};

const Slider: React.FC<SliderProps> = ({     
    value = 1,
    onChange  
}) => { 
    const handleChange = (newValue: number |number[]) => {
        onChange?.(newValue);
    }; 
    return (
        <NextUiSlider.Slider
            className=""
            defaultValue={[1]} 
            value={[value]}           
            onChange = {handleChange}
            maxValue={1}           
            step={0.1}
            aria-label="Volume"
            classNames={{
                track: "bg-gray relative grow rounded-fill h-3[3px]",                
            }}
        >            
        </NextUiSlider.Slider>
    );
}

export default Slider;