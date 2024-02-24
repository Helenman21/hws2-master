import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import { restoreState } from '../../../hw06/localStorage/localStorage'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
  	const classes = () => {
		if(restProps.children === 'red'){
			return s.red
		}
		if(restProps.children === 'secondary'){
			return s.secondary
		}
		if(restProps.children === 'default'){
			return s.default
		}
		if(restProps.children === 'disabled'){
			return s.disabled
		}
	}	
    const finalClassName =  s.button + " " + classes()

    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
