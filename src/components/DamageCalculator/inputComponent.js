import React from "react";

const InputComponent = props =>{
    return(
        <div style={{
            display: 'flex',
            flexDirection:'row',
            justifyContent:'center'
        }}>
            <p
            style={{
                display:'flex',
                flex:0.2,
                alignText:'center'
            }}>{props.name}</p>

            <input
                style={{
                    display:'flex',
                    flex:0.3
                }}
                type={'number'}
                   onChange={props.onChange}/>
        </div>
    )
};

export default InputComponent;
