import React, { useContext, useEffect, useRef } from 'react';
import { useField } from '@unform/core'
import Select from "react-select"
import { Container } from "./style";
import { ProviderContext } from '../../Providers/contexts';
import { backgrounds } from 'polished';

function componetSelect({Icon,name, options,placeholder, ...rest}){
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const { seachVideo } = useContext(ProviderContext)
  
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: "state.value",
      getValue: ref => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map(option => option.value);
        } else {
          if (!ref.state.value) {
            return "";
          }
          return ref.state.value.value;
        }
      }
    });
  }, [fieldName, registerField, rest.isMulti]);

  const customStyles = {
    container: (provided, state) =>({
      ...provided,
      width:'92vw',
    }),
    input: (provided, state) => ({
      ...provided,
      padding: 13,
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      background:'#56CCF2',
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      color:'#56CCF2',
    }),
    clearIndicator: (provided, state) => ({
      ...provided,
      color:'#666360',
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      background:'#666360',
    }),
    control: (provided, state) => ({
      ...provided,
      background:'#56CCF2',
      border: '0px',
      boxShadow: state.isFocused ? 0 : 0,
      '&:hover': {
       border: state.isFocused ? 0 : 0
    }
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color:'#666360',
    }),option: (provided, state) => ({
      ...provided,
      width:'98%',
    })
  }

  function seachVideoContext(e){
    if(name === 'seachLyrics'){
      seachVideo(e)
    }
  }

  return (
    <Container >
      <section>
        <div>
          {Icon && <Icon size={20}/>}
        </div>
           <Select
              ref={selectRef}
              closeMenuOnSelect={true}
              options={options}
              styles={customStyles}
              isClearable={true}
              onChange={e => seachVideoContext(e)}
              placeholder={placeholder}
            >
            </Select>
       </section> 
       {error &&
            <span>{error}</span>
          }
   </Container>
  );
}



export default componetSelect;
