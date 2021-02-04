import React from 'react'

export default function CurrencyRow(props) {

    const { 
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
     } = props
    // props.selectCurrency

    return (
        <div>
            <input type="number" className="input" value={amount} onChange={onChangeAmount}/>
            <select value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map((option => {
                    return <option key={option} value={option}>{option}</option>
                }))}
            </select>
        </div>
    )
}
