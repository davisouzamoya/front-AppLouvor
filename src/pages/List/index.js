import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/header/index'
import Input from '../../components/input/index'
import { backEnd } from '../../service/api'
import { Container } from "./style";
import { Form } from '@unform/web'
import { FiFilter } from 'react-icons/fi';
import { Link } from 'react-router-dom'
import { ProviderContext } from '../../Providers/contexts';

function List() {
  const { musicList } = useContext(ProviderContext)

  return (
    <div>
      <Header/>
      <Container>
        <Form>
          <Input
            placeholder="Buscar música"
            Icon={FiFilter}
            name="buscar"
            id='listMusic'
          />
          <ul>
            {musicList && musicList.map(data =>(
              <li key={data.id}>
                <Link to={`/profile/${data.artist}/${data.title}`}>
                  <img src={`https://www.vagalume.com.br/${data.artist}/images/${data.artist}.jpg`} alt=""/>
                  <div>
                      <span>{data.title}</span>
                      <span>{data.artist.replace('-',' ')}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Form>
      </Container>
    </div>
  );
}

export default List;

