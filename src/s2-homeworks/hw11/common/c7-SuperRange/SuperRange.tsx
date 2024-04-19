import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    console.log('props', props, props.id)
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                'color': '#00CC22',
                '& .MuiSlider-rail.css-14pt78w-MuiSlider-rail': {
                    color: '#8B8B8B',
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
//#hw11-single-slider > span.MuiSlider-rail.css-14pt78w-MuiSlider-rail