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
      width:'97vw',
      
    }),
    input: (provided, state) => ({
      ...provided,
      // padding: 13,
    })
    ,
    valueContainer: (provided, state) => ({
      ...provided,
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color:'var(--white)',
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
    }),
    clearIndicator: (provided, state) => ({
      ...provided,
      color:'var(--white)',
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
    }),
    control: (provided, state) => ({
      ...provided,
      background:'transparent',
      border: '0px',
      boxShadow: state.isFocused ? 0 : 0,
      '&:hover': {
       border: state.isFocused ? 0 : 0
    }
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color:'white',
      background:'var(--select)'
    }),
    menu: (provided, state) => ({
      ...provided,
     background:'var(--selectSecond) '
   }),
    menuList: (provided, state) => ({
      ...provided,
     background:'transparent'
   }),
    option: (provided, state) => ({
      ...provided,
      width:'98%',
      color:'var(--white)',
      '&:hover': {
        color: state.isFocused ? 'var(--black)' : 'var(--white)'
     }
    })
    ,placeholder: (provided, state) => ({
      ...provided,
      color:'var(--white)'
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
        {/* <div> */}
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
        {/* </div>  */}
       </section> 
       {error &&
            <span>{error}</span>
          }
   </Container>
  );
}



export default componetSelect;
