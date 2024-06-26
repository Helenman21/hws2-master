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
		//  console.log(restProps.children)
		if(restProps.children === 'red' ){
			return s.red
		}
		if(restProps.children === 'secondary' ){
			return s.secondary
		}
		if(restProps.children === 'default' || restProps.children ==='stop' || restProps.children ==='start'){
			return s.default
		}
		if(restProps.children === 'disabled'){
			return s.disabled
		}
		if(restProps.children === 'Save to ls' || restProps.children === 'Set loading...'){
			return s.buttonSave
		}
		if(restProps.children === 'Get from ls'){
			return s.buttonRestore
		}
		if(restProps.children === 'Sort up' || restProps.children === 'Send true' ||
		restProps.children === 'Send false' || restProps.children === 'Send undefined' || 
		 restProps.children === 'Send null'){
			return s.buttonRestore
		}
		if(restProps.children === 'Sort down'){
			return s.buttonRestore
		}
		if(restProps.children === 'Check 18+'){
			return s.buttonRestore
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
