import { Divider, InputNumber, Rate, Select } from 'antd'
import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import {  Radio, Space } from 'antd';

const ProductsFilter = () => {

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  const onChangeInput = (value: any) => {
  console.log('changed', value);
};
   const [value2, setValue2] = useState(3);
const desc = ['ولا حمار زبط', 'bad', 'normal', 'good', 'عراسي'];

  return (
    <div className='ProductsFilter'>
      <span className='ProductsFilter_header'>ProductsFilter </span>
      <Divider/> 
      <div>  Categories   </div>
      
      <div>  <Select
      defaultValue="lucy"
      style={{ width: "100%" }}
      onChange={handleChange}
      options={[  { value: 'jack', label: 'Jack' }, ]} />
       </div>
       <div className='Shortby' style={{marginTop:"10px",width:"100%"}} >Sort by:</div>

       <div style={{width:"100%"}}>
            <Select
              defaultValue="Relevance"
              style={{ width: "100%" }}
              onChange={handleChange}
              options={[
                { value: 'Relevance', label: 'Relevance' },
                { value: 'Date', label: 'Date' },
                { value: 'Price To Low', label: 'Price To Low ' },
                { value: 'Price To High', label: 'Price To High' },
              ]}
            /> </div>
      <div> Brand </div>
      <div>
        <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
        <Radio value={1}>Option A</Radio>
        <Radio value={2}>Option B</Radio>
        <Radio value={3}>Option C</Radio>
       
      </Space>
    </Radio.Group>
      </div>
      <div>Price Range
</div>
      <div> 
        <InputNumber min={0} max={1000} defaultValue={0} onChange={onChangeInput} /> {`>`} 
        <InputNumber min={0} max={1000} defaultValue={250} onChange={onChangeInput} />

         </div>
         <div>Ratings</div>
         <div>
                <Rate tooltips={desc}  className='Rate' onChange={setValue2} value={value2} />

         </div>
      <Divider/> 
      <Space direction='vertical' >
        <Radio>On Sale</Radio>
        <Radio>In Stock</Radio>
        <Radio>Featured</Radio>
   
        </Space>        
               <Divider/> 
               
 <div>

 </div>
    </div>
  )
}

export default ProductsFilter