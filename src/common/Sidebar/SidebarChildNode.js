import { click } from '@testing-library/user-event/dist/click';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SecondLayer from './SecondLayer';

const SidebarChildNode = ({item:element,index,click,setClick,data}) => {
  
  useEffect(() => {
    const urlPath=window.location.pathname
    const firstLayerTitle=urlPath.split("/")[1]
    console.log(firstLayerTitle)
    const getSignleItem=data.find(dt=>dt.title.toLowerCase()==firstLayerTitle)
    if(getSignleItem){
      setClick(getSignleItem.id)
    }
    console.log(getSignleItem)
    // console.log(getSignleItem)
    // console.log(element.title)
    if(urlPath===element.path){
      setClick(element.id)
    }
  }, []);
  
  return (
    <div>
      <ul>
        <li onClick={()=>{
         
          if(click===element.id){
            setClick(null)
          }else{

            setClick(element.id)
          }
          }} style={{cursor:"pointer"}}>{element.title}</li>
       {
        click===element.id && <ul>
                     {
                      element?.children?.map((child,i)=><SecondLayer key={child.id} child={child} />)
                     }
                     
                 </ul>
       }

      </ul>
      
    </div>
  );
};

export default SidebarChildNode;