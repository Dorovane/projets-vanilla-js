const calculHT=()=>{
  if((document.getElementById('TTC-price-input').value>=0 && document.getElementById('TTC-price-input').value!='') &&  document.getElementById('select-input').value!=0){
    const HTPrice= document.getElementById('TTC-price-input').value * (1-document.getElementById('select-input').value)

    const TVAValue=document.getElementById('TTC-price-input').value*document.getElementById('select-input').value
  
  
    document.getElementById('HT-price-span').textContent=HTPrice
  
  
    document.getElementById('TVA-value').textContent=TVAValue
  }

}


const calculMargin=()=>{
  if(document.getElementById('selling-price-input').value>0 && (document.getElementById('TTC-price-input').value>=0 && document.getElementById('TTC-price-input').value!='') &&  document.getElementById('select-input').value!=0){

    const HTPrice= document.getElementById('TTC-price-input').value * (1-document.getElementById('select-input').value)

    const margin=HTPrice-document.getElementById('selling-price-input').value
  
    const marginPercentage=(margin/document.getElementById('selling-price-input').value)*100
  
    document.getElementById('margin').textContent=margin
  
    document.getElementById('margin-percentage').textContent=marginPercentage
  }
}



document.getElementById('TTC-price-input').addEventListener('input',calculHT)

document.getElementById('selling-price-input').addEventListener('input',calculMargin)

document.getElementById('select-input').addEventListener('change',calculHT)

