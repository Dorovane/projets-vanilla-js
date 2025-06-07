const calculTTC=()=>{
  if((document.getElementById('HT-price-input').value>=0 && document.getElementById('HT-price-input').value!='') &&  document.getElementById('select-input').value!=0){
    const TTCPrice= document.getElementById('HT-price-input').value * (1+document.getElementById('select-input').value)

    const TVAValue=document.getElementById('HT-price-input').value*document.getElementById('select-input').value
  
  
    document.getElementById('TTC-price-span').textContent=TTCPrice
  
  
    document.getElementById('TVA-value').textContent=TVAValue
  }

}


const calculMargin=()=>{
  if(document.getElementById('selling-price-input').value>0 (document.getElementById('HT-price-input').value>=0 && document.getElementById('HT-price-input').value!='') &&  document.getElementById('select-input').value!=0){

    const margin=document.getElementById('HT-price-input').value-document.getElementById('selling-price-input').value
  
    const marginPercentage=(margin/document.getElementById('selling-price-input').value)*100
  
    document.getElementById('margin').textContent=margin
  
    document.getElementById('margin-percentage').textContent=marginPercentage
  }
}



document.getElementById('HT-price-input').addEventListener('input',calculTTC)

document.getElementById('selling-price-input').addEventListener('input',calculMargin)

document.getElementById('select-input').addEventListener('change',calculTTC)

