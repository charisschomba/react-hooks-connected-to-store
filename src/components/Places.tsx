import React, { useState } from 'react';
import './Places.css';
import { useDispatch, useSelector } from 'react-redux';
import { addPlace } from '../../src/store/actions/places';
import { Button, Input, Layout  } from 'antd';

const { Header, Content } = Layout
const AddPlace: React.FC = () => {

  const[placeName, setPlaceName] = useState('')
  const dispatch = useDispatch()
  const places = useSelector((state: any) => state.places.listOfPlaces)
  const onClickHandler = () => {
    if(placeName.trim() === "") {
      return;
    }
    dispatch(addPlace(placeName))
  }
  const handleSetPlace = (placeName: any) => {
    if(placeName.trim() === "") {
      return;
    }
    setPlaceName(placeName);
  };


  return (
    <div className="App">
      <Layout className="layout">
      <Header className="Header">
       Using Hooks With Store
      </Header>
      <Content className="container">
        <div className="content-container">
          <div className="add-place">
            <Input 
              className="text-input"
              placeholder="Enter place"
              onChange={(e) => handleSetPlace(e.target.value)}
            />
            <Button
              size="large"
              type="primary"
              onClick={onClickHandler}
            >Add Place</Button>
          </div>
          <div className="list-items">
            {
              places.length !== 0 
              ? places.map( (place: string, index: number) => <div className="items" key={index}><h1>{place}</h1></div>) 
              : <div className="items">  Added Places will be displayed here</div>
            }
          </div>
        </div>
      </Content>
      </Layout>
    </div>
  );
}

export default AddPlace;
