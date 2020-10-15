import React, { useEffect, useState } from 'react'
import Global from './../../utils'
import { Button, Input, Slider } from 'antd'
import InputColor from 'react-input-color';
function Pinyin () {
   const [wordAry, setWordAry] = useState([])
   const [inputValue, setInput] = useState('')
   return (
      <div>
         <Input
            placeholder='请输入中文!'
            style={{ width: 150, marginRight: 10 }}
            value={inputValue}
            onChange={(e) => {
               if (/^[\u4e00-\u9fa5]+$/i.test(e.target.value)) {
                  setInput(e.target.value)
               }
            }}
         />
         <Button
            type="primary"
            onClick={() => {
               setWordAry(inputValue.split('').map(item => {
                  return {
                     word: item,
                     id: Global.createHash(8),
                     pinyinColor: '#555',
                     strokeColor: '#555',
                     radicalColor: '#555',
                     pinyinWidth: 150,
                     hanziWidth: 150
                  }
               }))
            }}>生成</Button>
         {wordAry.map((item, ids) =>
            <div
               key={item.id}
               style={{ margin: 10,border:'1px solid #000' }}>
               <div>
                  拼音颜色
               <InputColor
                     initialValue="#555"
                     onChange={(e) => {
                        const ary = [...wordAry]
                        ary[ids].pinyinColor = e.hex
                        setWordAry(ary)
                     }}
                     placement="right"
                  />
               </div>
               <div>
                  文字颜色
            <InputColor
                     initialValue="#555"
                     onChange={(e) => {
                        const ary = [...wordAry]
                        ary[ids].strokeColor = e.hex
                        setWordAry(ary)
                     }}
                     placement="right"
                  />
               </div>
               <div>
                  部首颜色
               <InputColor
                     initialValue="#555"
                     onChange={(e) => {
                        const ary = [...wordAry]
                        ary[ids].radicalColor = e.hex
                        setWordAry(ary)
                     }}
                     placement="right"
                  />
               </div>
               <div
                  style={{ display: 'flex', alignItems: 'center' }}>
                  拼音宽度
               <Slider
                     onChange={(e) => {
                        const ary = [...wordAry]
                        ary[ids].pinyinWidth = e
                        setWordAry(ary)
                     }}
                     style={{ display: 'inline-block', width: 200 }}
                     min={150}
                     max={500}
                  />
               </div>
               <div
                  style={{ display: 'flex', alignItems: 'center' }}>
                  汉字宽度
               <Slider
                     onChange={(e) => {
                        const ary = [...wordAry]
                        ary[ids].hanziWidth = e
                        setWordAry(ary)
                     }}
                     style={{ display: 'inline-block', width: 200 }}
                     min={150}
                     max={500}
                  />
               </div>
               <nb-card
                  class="card"
                  word={item.word}
                  config={`{"pinyin":{"width":${item.pinyinWidth || 150},"color":"${item.pinyinColor || '#555'}"},"hanzi":{"width":${item.hanziWidth || 150},"strokeColor":"${item.strokeColor || '#555'}","radicalColor":"${item.radicalColor || '#555'}"}}`}
               ></nb-card>
            </div>
         )}

      </div>
   );
}
export default Pinyin